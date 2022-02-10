module.exports = {
	env: {
		browser: true
	},
	extends: ['plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	plugins: ['react'],
	rules: { 'react/prop-types': 'off' }
};
