const path = require('node:path')

const relative = (files) =>
  files.map((file) => path.relative(process.cwd(), file))

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${relative(filenames).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,ts}': () => 'npm run typescript:check',
  '*': 'prettier --write --ignore-unknown',
  '*.{js,jsx,ts,tsx,md,css,scss,json}': (files) =>
    `cspell --show-suggestions --quiet --gitignore ${relative(files).join(
      ' '
    )}`,
}
