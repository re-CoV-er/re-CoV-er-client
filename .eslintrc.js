module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/prop-types": 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                "ignoreRestSiblings": true,
                "varsIgnorePattern": "^_.*",
                "argsIgnorePattern": "^_.*",
                "args": "after-used"
            }
        ],
    }
};