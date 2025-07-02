// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint', 'react'],
//   extends: [
//     'next/core-web-vitals',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//   ],
//   rules: {
//     'react/no-unescaped-entities': 'off',
//     '@typescript-eslint/no-unused-vars': 'off',
//     'react/react-in-jsx-scope': 'off',
//   },
// }; 


module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',                     // ✅ Disable PropTypes check
      'react-hooks/exhaustive-deps': 'warn',         // ✅ Optional, downgrade or disable
    },
  };
  
