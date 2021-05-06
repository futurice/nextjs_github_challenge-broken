// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: ['./tsconfig.json'],
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: ['react-hooks'],
  // env: {
  //   browser: true,
  //   jest: true,
  // },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'operator-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-fallthrough': 'off',
    'object-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'function-paren-newline': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'ts-expect-error': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        svg: 'always',
        json: 'always',
        png: 'always',
        jpeg: 'always',
        jpg: 'always',
        mp4: 'always',
      },
    ],
    'react/no-unescaped-entities': 'off',
    'max-classes-per-file': 'off',
    'no-undef': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.spec.tsx',
          '**/*.spec.ts',
          '**/*.stories.tsx',
          './migrations/**.ts',
          './scripts/**.ts',
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
}
