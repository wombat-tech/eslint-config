// This is the config for Typescript projects. It's the default exported one as most of our
// projects are Typescript.

const WARN = 'warn'
const OFF = 'off'

const config = {
  extends: [
    // Extend the JavScript config as it still has valuable rules. Some rules might need to be
    // duplicated in the TS plugin, though.
    './javascript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // Empty blocks
    // Has to be repeated for Typescript
    '@typescript-eslint/no-empty-function': OFF,

    // Typescript specific
    '@typescript-eslint/naming-convention': [
      WARN,
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
  },
}

module.exports = config
