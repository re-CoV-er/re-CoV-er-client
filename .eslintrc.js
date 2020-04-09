module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};