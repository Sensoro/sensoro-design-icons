import 'zx/globals';

(async () => {
  await $`pnpm generate`;

  await $`pnpm build`;

  await $`walrus release --skip-build`;
})()
