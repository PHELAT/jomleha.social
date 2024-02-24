# WIP

### UI Changes

- Set minimum height for each row to be larger, so it's more accessible on touchscreen. 6dafa95110103da3e58dce68332bd4ca34ecc280
- Use Courier Prime as the default typeface. 7a3a616deb48793695e26ad40066e32e31a14165

### Infrastructure Changes

- Use the new next app router.
- Cache detail page response for 24 hours. This is due to the fact we don't update the content.

### Housekeeping

- Refactor the whole codebase for better performance, readability and maintainability.
- Format the whole project using Prettier. 21458e65ae16ef6f4b35c613a59168eb08eb06e7...ac2531005a328f92bc70c4b852abbcbf360b5ed3

### Dependency Updates

- Update next to 14.1.0 a4524cc912e06fc2d56ee1cd1b3147baf4a1fbb4
- Update @vercel/edge-config to 1.0.2 17e80f01c7d896125d56a6c2698d83c9f58ec584
- Update firebase-admin to 11.11.1 a8c508c604c88824961b20b41d6117b8d8a75c21
- Update typescript to 5.3.3 43a432c47cda98e141dc0f6ef9ab7ffffefcf6f4
- Update autoprefixer to 10.4.17 804b6b54a306f308b1d2d5b154c6f10014816843
- Update eslint to 8.56.0 0f6adf15ccd73fa023a55e2b4d850ca93ad15b60
- Update postcss to 8.4.35 9bf12d7b296d47048f2f2eb3e02c29e59d8ededa
- Update tailwindcss to 3.4.1 11c8a9adef60712baaa731a90b19f6380fb51336

# v1.1.1

### Bug Fixes

- Support line breaks for jomleha. 33fdd1afdfd8ca21eb332a2026b733ae85f70bd2

# v1.1.0

### UX Changes

- Added support for LTR direction when it comes to showing LTR 'jomleh'. 9150f5a6c34b5e3e3072d36db1aa4c223b20486f
- Hid browser scrollbar in the detail screen. This is specially problematic on Windows OS, since the scrollbar is visible even in resting state. 10941a1ae583bec5bff7f5fd632c7a6add88921e

# v1.0.0

First release
