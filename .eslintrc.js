module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // 基本的なESLintルール
    'no-console': 'warn',
    'no-unused-vars': 'off', // TypeScriptのルールを使用
    
    // TypeScriptルール
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  ignorePatterns: [
    'dist/**',
    'build/**',
    'node_modules/**',
    '*.js',
    '.ladle/**'
  ],
};