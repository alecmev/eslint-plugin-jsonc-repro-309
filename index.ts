import { Linter } from "eslint";
import plugin from 'eslint-plugin-jsonc';

export default {
  plugins: { jsonc: plugin },
  rules: plugin.configs['recommended-with-json'].rules
} satisfies Linter.FlatConfig
