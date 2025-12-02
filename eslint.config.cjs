/* ESLint v9 Flat Config for TypeScript + Node */

const js = require('@eslint/js');
const globals = require('globals');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
    // 忽略目录
    {
        ignores: [
            'node_modules/',
            'out/',
            'dist/',
            '.vscode-test/'
        ]
    },

    // 针对 JS 文件（如果只用 TS，可删除此块）
    {
        ...js.configs.recommended,
        files: ['**/*.{js,cjs,mjs}'],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2021
            }
        }
    },

    // TypeScript 文件
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                tsconfigRootDir: __dirname,
                // 若启用需要类型信息的规则，请保留 project。若不需要，可注释掉以提升性能。
                project: ['./tsconfig.json']
            },
            globals: {
                ...globals.node,
                ...globals.es2021
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin
        },
        rules: {
            // 推荐规则
            ...tsPlugin.configs.recommended.rules
            // 如需类型检查规则，额外启用：
            // ...tsPlugin.configs['recommended-requiring-type-checking'].rules
        }
    },

    // 测试代码放宽 require 语法限制（防止 @typescript-eslint/no-require-imports 阻塞）
    {
        files: ['src/test/**/*.{ts,tsx,js}'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off'
        }
    }
];