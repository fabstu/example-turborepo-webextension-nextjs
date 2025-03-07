// const { resolve } = require("node:path");

// const project = import("tsconfig.json");
// const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		"only-warn",
		'@typescript-eslint',
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"next",
		// "next/core-web-vitals",
		// "prettier",
		// require.resolve("@vercel/style-guide/eslint/next"),
		// "plugin:react/recommended",
		// "turbo",
	],
	// globals: {
	// 	React: true,
	// 	JSX: true,
	// },
	// env: {
	// 	node: true,
	// 	browser: true,
	// },
	// plugins: ["only-warn"],
	// settings: {
	// 	"import/resolver": {
	// 		typescript: {
	// 			project,
	// 		},
	// 	},
	// },
	// ignorePatterns: [
	// 	// Ignore dotfiles
	// 	".*.js",
	// 	"node_modules/",
	// ],
	// overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
	// parser: "babel-eslint",
	// parserOptions: { sourceType: "module" },
};
