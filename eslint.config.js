import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"]},
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    ignores: [
      "project-nurtown-main/**", // Ignore a specific folder
    ],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off", // Disable this rule for React 17+
      'react/prop-types': 'off',
    },
  },
  {
    "compilerOptions": {
      "module": "ESNext",  // Or "ES6" for older versions of TypeScript
      "moduleResolution": "node",
      "target": "ESNext",  // Or "ES6"
      "esModuleInterop": true
    }
  }
];
