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
        ecmaVersion: "ESNEXT",
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/prop-types": 0
    }
};