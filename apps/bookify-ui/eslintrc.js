/** @type {import("eslint").Linter.Config} */
const config = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "jsdoc"],
	extends: [
		"@repo/eslint-config/react-internal.js",
		"@next/next/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsdoc/recommended"
	],
	parserOptions: {
		project: "./tsconfig.lint.json",
		tsconfigRootDir: __dirname,
	},
	rules: {
		"jsdoc/check-alignment": "warn", // Warn for incorrect alignment
		"jsdoc/check-param-names": "warn", // Warn if parameter names in JSDoc don't match function
		"jsdoc/check-tag-names": "warn", // Warn for invalid JSDoc tag names
		"jsdoc/check-types": "warn", // Warn if types are missing or malformed
		"jsdoc/require-jsdoc": "off", // Disable requiring JSDoc for every function
		"jsdoc/require-param": "off", // Don't require @param tags
		"jsdoc/require-param-type": "warn", // Warn if @param types are missing
		"jsdoc/require-returns": "off", // Don't require @returns tag
		"jsdoc/require-returns-type": "warn" // Warn if return types are missing
	}
};

export default config;