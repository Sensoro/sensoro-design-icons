import 'zx/globals';
import simpleGit from 'simple-git';
import { createLogger } from './helpers/signale';

const git = simpleGit();
const logger = createLogger('release');

async function release() {
  const branch = await git.branch();
  logger.info(`branch: ${branch.current}`);

  logger.log('check git status');
  const status = await git.status();
  if (status.files.length !== 0) {
    logger.error('git status is not clean');
    process.exit(1);
  }

  logger.log('check git remote update');
  await git.fetch();
  const status1 = await git.status();
  if (status1.behind) {
    logger.error('git status is behind remote');
    process.exit(1);
  }

  logger.log('check npm registry');
  const registry = (await $`npm config get registry`).stdout.trim();
  if (registry !== 'https://registry.npmjs.org/') {
    logger.error('npm registry is not https://registry.npmjs.org/');
    process.exit(1);
  }

  logger.log('check package changed');
  const changed = (await $`lerna changed --loglevel error`).stdout.trim();
  if (!changed) {
    logger.error('no package is changed');
    process.exit(1);
  }

  logger.log('build packages');
  await $`pnpm bootstrap`;
  await $`pnpm generate`;
  await $`pnpm release:build`;

  logger.log('bump version');
  await $`pnpm release:version`;

  logger.log('pnpm publish');
  await $`pnpm release:publish`;
}

release().catch(() => {
  process.exit(1);
});
