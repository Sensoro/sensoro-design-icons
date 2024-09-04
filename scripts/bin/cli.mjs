#!/usr/bin/env node

import { join, dirname } from 'node:path';
import { existsSync } from 'node:fs';
import assert from 'node:assert';
import { fileURLToPath } from 'node:url';
import { sync } from 'cross-spawn';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const argv = process.argv.slice(2)
const [name, ...throughArgs] = argv
const scriptsPath = join(__dirname, `../${name}.ts`)

assert(
  existsSync(scriptsPath) && !name.startsWith('.'),
  `Executed script '${chalk.red(name)}' does not exist`
)

console.log(chalk.cyan(`walrus: ${name}\n`))

// current dir path may contain spaces
const scriptPathAsStr = JSON.stringify(scriptsPath)
const spawn = sync(
  'tsx',
  [scriptPathAsStr, ...throughArgs],
  {
    env: process.env,
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true
  }
)
if (spawn.status !== 0) {
  console.log(chalk.red(`walrus: ${name} execute fail`))
  process.exit(1)
}
