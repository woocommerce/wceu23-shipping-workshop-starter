# Extension Audit Template

## Functionality Review

PackLink PRO links your store to a network of shipping services. The merchant can select explicit services, or defer to PackLink to select the cheapest one.

This extension touches: *(mark all that apply)*

- [ ] Products (Beta)
    - [ ] Product title
    - [ ] Product price
    - [ ] Product meta
    - [ ] Add to cart button
- [ ] Single Product Pages
    - [ ] Product title
    - [ ] Product price
    - [ ] Product meta
    - [ ] Add to cart form
- [x] Cart Page
    - [ ] Cart items
    - [ ] Product title
    - [ ] Product price
    - [ ] Product meta
    - [ ] Product quantity
    - [ ] Cart totals
    - [ ] Notices
    - [ ] Custom functionality
- [x] Checkout Page
    - [ ] Checkout fields
    - [ ] Express checkout
    - [ ] Contact information
    - [x] Shipping method
    - [x] Pickup method
    - [ ] Shipping address
    - [ ] Billing address
    - [ ] Payment options
    - [ ] Checkout totals
    - [ ] Product title
    - [ ] Product price
    - [ ] Product meta
    - [ ] Product meta
    - [ ] Notices
    - [ ] Custom functionality
    - [ ] Order received page
- [ ] My Account Page
- [ ] Store API
    - [ ] Edits existing endpoint
    - [ ] Adds custom endpoint
- [ ] Settings
    - [ ] WooCommerce settings
    - [ ] Custom settings page
    - [ ] Customizer

## Compatibility with Blocks


Issues identified:
When using a UK address in PackLink PRO, it is possible to choose a shipping method that uses a "drop-off" (aka Local pickup) method.

This method works in the Shortcode Cart/Checkout, but not in the Cart or Checkout blocks.

<img width="452" alt="image" src="https://github.com/woocommerce/woocommerce-blocks/assets/5656702/2b93a5a5-9b34-428f-bcda-738c707baed0">

The shipping methods can have logos associated with them, as seen in the example above. These logos do not show in the Cart or Checkout blocks.

<img width="358" alt="image" src="https://github.com/woocommerce/woocommerce-blocks/assets/5656702/e2985ad1-1f93-45a6-9806-98962ed0f3fe">

When trying to check out using the shipping method provided by PackLink PRO, the error `Sorry, this order requires a shipping option.` appears.

*Select those that apply:*

- [ ] Extension is already fully compatible with Blocks
- [x] Extension requires integration with Blocks
- [ ] Extension requires fixes in the blocks context
- [ ] Extension could be further enhanced to take advantage of Blocks

## Integration Required

This extension requires integration with:

- [x] Cart Block
- [x] Checkout Block
- [ ] Payment Methods API
- [ ] Store API
- [ ] Other

### Integration Points


| Location                                                                    | Type                                                                          | Description                                             | Effort |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------- | :----: |
| Client-side | Maybe a filter for shipping options, or new way for us to display logos alongside shipping methods. | Showing logos or other custom content alongside a shipping metohd. |  _5_   |
|                                                                             |                                                                               |
