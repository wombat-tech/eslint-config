const WARN = 'warn'
const ERROR = 'error'
const NEVER = 'never'
const ALWAYS = 'always'
const OFF = 'off'

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
    'jsx-quotes': [WARN, 'prefer-single'],
    quotes: [WARN, 'single'],

    'max-len': [
      WARN, 100, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true
      }
    ],
    indent: [WARN, 2, { SwitchCase: 1, flatTernaryExpressions: true }],

    // Empty blocks
    'no-empty-function': OFF,
    '@typescript-eslint/no-empty-function': OFF,

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

    // Rules unneeded by us
    'no-prototype-builtins': OFF,

    // Typescript specific
    '@typescript-eslint/naming-convention': [
      WARN,
      { selector: 'enum', format: ['PascalCase'] },
      { selector: 'enumMember', format: ['UPPER_CASE'] }
    ]
  }
}

module.exports = config
