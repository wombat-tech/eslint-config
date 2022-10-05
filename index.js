const WARN = 'warn'
const ERROR = 'error'
const NEVER = 'never'
const ALWAYS = 'always'

const config = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: [WARN, NEVER],
    'jsx-quotes': [WARN, 'prefer-double'],
    'comma-dangle': [WARN, 'always-multiline'],
    quotes: [WARN, 'single'],

    'max-len': [
      WARN, 80, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    indent: [WARN, 2, { SwitchCase: 1, flatTernaryExpressions: true }],

    // Spaces
    'func-call-spacing': [WARN, NEVER],
    'no-multi-spaces': WARN,
    'arrow-spacing': WARN,
    'comma-spacing': WARN,
    'key-spacing': WARN,
    'object-curly-spacing': [WARN, ALWAYS],
    'no-trailing-spaces': WARN,
    'block-spacing': WARN,

    // Smells
    'no-param-reassign': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-duplicate-imports': ERROR,
    'no-new-wrappers': ERROR,
    'no-underscore-dangle': ERROR,
    'no-var': ERROR,
    'no-unreachable': ERROR,
    'no-fallthrough': ERROR,
    'one-var': [ERROR, NEVER],
    'no-whitespace-before-property': ERROR,

    // Typescript specific
    '@typescript-eslint/naming-convention': [
      WARN,
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] },
    ],
  },
}

module.exports = config
