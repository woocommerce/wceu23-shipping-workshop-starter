module.exports = {
	templatesPath: __dirname,
	defaultValues: {
		slug: 'shipping-workshop',
		title: 'WordCamp EU Shipping Workshop',
		dashicon: 'palmtree',
		version: '1.0.0',
		npmDependencies: [
			"@wordpress/icons@^10.14.0",
			"lodash@^4.17.21",
		],
		customScripts: {
			"env": "wp-env"
		},
		npmDevDependencies: [
			"@woocommerce/dependency-extraction-webpack-plugin@^3.0.1",
			"@woocommerce/eslint-plugin@^2.3.0",
			"@wordpress/prettier-config@^4.14.0",
			"@wordpress/scripts@^30.7.0",
			"@wordpress/env@^10.14.0"
		],
	},
};
