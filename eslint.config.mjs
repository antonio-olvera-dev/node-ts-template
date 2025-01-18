// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ["node_modules"],
    "rules": {
        "no-multi-spaces": "error",
        "quotes": ["warn", "single"],
        "padded-blocks":["error", { "classes": "always" }],
        "padding-line-between-statements":"error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-multiple-empty-lines":"error",
        "no-duplicate-imports":"error",
        "comma-dangle":"error",
        "semi":"error",
        "@typescript-eslint/no-non-null-assertion": "off"
      },
  }
);