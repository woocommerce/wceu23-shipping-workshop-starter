module.exports = {
	templatesPath: __dirname,
	defaultValues: {
		slug: 'shipping-workshop',
		title: 'WordCamp EU Shipping Workshop',
		dashicon: 'palmtree',
		version: '1.0.0',
		npmDependencies: [
			"@wordpress/icons@^9.22.0",
			"lodash@^4.17.21",
		],
		customScripts: {
			"env": "wp-env"
		},
		npmDevDependencies: [
			"@woocommerce/dependency-extraction-webpack-plugin@^2.2.0",
			"@woocommerce/eslint-plugin@^2.2.0",
			"@wordpress/prettier-config@^2.14.0",
			"@wordpress/scripts@^26.2.0",
			"@wordpress/env@^7.0.0"
		],
	},
};
