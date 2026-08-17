// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/messerley-collection/";
    },
  },{id: "nav-collection",
          title: "Collection",
          description: "Browse the complete Messerley Collection",
          section: "Navigation",
          handler: () => {
            window.location.href = "/messerley-collection/collection/";
          },
        },{id: "nav-map",
          title: "Map",
          description: "Explore the Messerley Collection by town",
          section: "Navigation",
          handler: () => {
            window.location.href = "/messerley-collection/map/";
          },
        },{id: "tokens-1-token-j-r-phillips-amp-co-athlone",
          title: '1¢ Token — J. R. Phillips &amp;amp; Co., Athlone',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/athlone-phillips-001/";
            },},{id: "tokens-10-token-mrs-i-p-hensley-beldor",
          title: '10¢ Token — Mrs. I. P. Hensley, Beldor',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/beldor-hensley-010/";
            },},{id: "tokens-25-token-mrs-i-p-hensley-beldor",
          title: '25¢ Token — Mrs. I. P. Hensley, Beldor',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/beldor-hensley-025/";
            },},{id: "tokens-10-token-bridgewater-cab-bridgewater",
          title: '10¢ Token — Bridgewater Cab, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-cab-010/";
            },},{id: "tokens-1-token-d-s-thomas-cannery-bridgewater",
          title: '1¢ Token — D. S. Thomas Cannery, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-d-s-thomas-cannery-001/";
            },},{id: "tokens-5-token-e-g-crist-bridgewater",
          title: '5¢ Token — E. G. Crist, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-e-g-crist-005/";
            },},{id: "tokens-10-token-e-g-crist-bridgewater",
          title: '10¢ Token — E. G. Crist, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-e-g-crist-010/";
            },},{id: "tokens-25-token-e-g-crist-bridgewater",
          title: '25¢ Token — E. G. Crist, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-e-g-crist-025/";
            },},{id: "tokens-50-token-e-g-crist-bridgewater",
          title: '50¢ Token — E. G. Crist, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-crist-050/";
            },},{id: "tokens-1-token-j-w-click-amp-co-bridgewater",
          title: '1¢ Token — J. W. Click &amp;amp; Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-click-001/";
            },},{id: "tokens-2-token-j-w-click-amp-co-bridgewater",
          title: '2¢ Token — J. W. Click &amp;amp; Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-click-and-co-002/";
            },},{id: "tokens-10-token-j-w-click-amp-co-bridgewater",
          title: '10¢ Token — J. W. Click &amp;amp; Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-click-and-co-010/";
            },},{id: "tokens-1-token-j-w-hisey-bridgewater",
          title: '1¢ Token — J. W. Hisey, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-hisey-001/";
            },},{id: "tokens-5-token-j-w-hisey-bridgewater",
          title: '5¢ Token — J. W. Hisey, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-hisey-005/";
            },},{id: "tokens-10-token-j-w-hisey-bridgewater",
          title: '10¢ Token — J. W. Hisey, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-hisey-010/";
            },},{id: "tokens-50-token-j-w-hisey-bridgewater",
          title: '50¢ Token — J. W. Hisey, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-hisey-050/";
            },},{id: "tokens-1-token-j-w-hisey-bridgewater",
          title: '$1 Token — J. W. Hisey, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-j-w-hisey-100/";
            },},{id: "tokens-5-token-l-c-sanger-bridgewater",
          title: '5¢ Token — L. C. Sanger, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-l-c-sanger-005/";
            },},{id: "tokens-1-token-the-sipe-amp-arey-co-bridgewater",
          title: '1¢ Token — The Sipe &amp;amp; Arey Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-the-sipe-and-arey-co-001/";
            },},{id: "tokens-2-token-the-sipe-amp-arey-co-bridgewater",
          title: '2¢ Token — The Sipe &amp;amp; Arey Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-the-sipe-and-arey-co-002/";
            },},{id: "tokens-3-token-the-sipe-amp-arey-co-bridgewater",
          title: '3¢ Token — The Sipe &amp;amp; Arey Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-the-sipe-and-arey-co-003/";
            },},{id: "tokens-10-token-the-sipe-amp-arey-co-bridgewater",
          title: '10¢ Token — The Sipe &amp;amp; Arey Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-the-sipe-and-arey-co-010/";
            },},{id: "tokens-25-token-the-sipe-amp-arey-co-bridgewater",
          title: '25¢ Token — The Sipe &amp;amp; Arey Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-the-sipe-and-arey-co-025/";
            },},{id: "tokens-1-qt-token-w-m-miller-bridgewater",
          title: '1 Qt Token — W. M. Miller, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-w-m-miller-1-qt/";
            },},{id: "tokens-4-qt-token-w-m-miller-bridgewater",
          title: '4 Qt Token — W. M. Miller, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-w-m-miller-4-qt/";
            },},{id: "tokens-80-qt-token-w-m-miller-bridgewater",
          title: '80 Qt Token — W. M. Miller, Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-w-m-miller-80-qt/";
            },},{id: "tokens-5-token-wightman-drug-co-bridgewater",
          title: '5¢ Token — Wightman Drug Co., Bridgewater',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/bridgewater-wightman-drug-co-005/";
            },},{id: "tokens-5-token-a-c-heishman-broadway",
          title: '5¢ Token — A. C. Heishman, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-a-c-heishman-005/";
            },},{id: "tokens-one-loaf-token-broadway-bakery-broadway",
          title: 'One Loaf Token — Broadway Bakery, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-bakery-loaf/";
            },},{id: "tokens-cigar-soda-token-d-o-hulvey-broadway",
          title: 'Cigar/Soda Token — D. O. Hulvey, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-hulvey-cigarsoda/";
            },},{id: "tokens-5-token-e-j-shaffer-broadway",
          title: '5¢ Token — E. J. Shaffer, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-e-j-shaffer-005/";
            },},{id: "tokens-10-token-e-j-shaffer-broadway",
          title: '10¢ Token — E. J. Shaffer, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-e-j-shaffer-010/";
            },},{id: "tokens-25-token-e-j-shaffer-broadway",
          title: '25¢ Token — E. J. Shaffer, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-e-j-shaffer-025/";
            },},{id: "tokens-1-token-e-j-shaffer-broadway",
          title: '$1 Token — E. J. Shaffer, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-e-j-shaffer-100/";
            },},{id: "tokens-10-token-jim-39-s-taxi-896-7892-broadway",
          title: '10¢ Token — Jim&amp;#39;s Taxi (896-7892), Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-jims-taxi-896-7892-010/";
            },},{id: "tokens-10-token-jim-39-s-taxi-896-7982-broadway",
          title: '10¢ Token — Jim&amp;#39;s Taxi (896-7982), Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-jims-taxi-896-7982-010/";
            },},{id: "tokens-soda-token-the-creamery-store-broadway",
          title: 'Soda Token — The Creamery Store, Broadway',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/broadway-the-creamery-store-soda/";
            },},{id: "tokens-1-token-j-s-garber-clover-hill",
          title: '1¢ Token — J. S. Garber, Clover Hill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/clover-hill-j-s-garber-001/";
            },},{id: "tokens-5-token-j-s-garber-clover-hill",
          title: '5¢ Token — J. S. Garber, Clover Hill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/clover-hill-j-s-garber-005/";
            },},{id: "tokens-10-token-j-s-garber-clover-hill",
          title: '10¢ Token — J. S. Garber, Clover Hill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/clover-hill-j-s-garber-010/";
            },},{id: "tokens-25-token-j-s-garber-clover-hill",
          title: '25¢ Token — J. S. Garber, Clover Hill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/clover-hill-j-s-garber-025/";
            },},{id: "tokens-50-token-j-s-garber-clover-hill",
          title: '50¢ Token — J. S. Garber, Clover Hill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/clover-hill-j-s-garber-050/";
            },},{id: "tokens-drink-or-cigar-token-s-s-s-m-williams-clover-hill",
          title: 'Drink Or Cigar Token — S.S. / S. M. Williams, Clover Hill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/clover-hill-ss-and-s-m-williams-drink-or-cigar/";
            },},{id: "tokens-1-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '1¢ Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-001/";
            },},{id: "tokens-2-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '2¢ Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-002/";
            },},{id: "tokens-5-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '5¢ Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-005/";
            },},{id: "tokens-10-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '10¢ Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-010/";
            },},{id: "tokens-25-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '25¢ Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-025/";
            },},{id: "tokens-50-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '50¢ Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-050/";
            },},{id: "tokens-1-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '$1 Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-100-2/";
            },},{id: "tokens-1-token-thos-p-yager-inc-cross-keys-amp-penn-laird",
          title: '$1 Token — Thos. P. Yager Inc., Cross Keys &amp;amp; Penn Laird',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-and-penn-laird-thos-p-yager-inc-100/";
            },},{id: "tokens-1-token-g-w-tyler-cross-keys",
          title: '1¢ Token — G. W. Tyler, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-g-w-tyler-001/";
            },},{id: "tokens-10-token-g-w-tyler-cross-keys",
          title: '10¢ Token — G. W. Tyler, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-g-w-tyler-010/";
            },},{id: "tokens-25-token-g-w-tyler-cross-keys",
          title: '25¢ Token — G. W. Tyler, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-g-w-tyler-025/";
            },},{id: "tokens-50-token-g-w-tyler-cross-keys",
          title: '50¢ Token — G. W. Tyler, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-g-w-tyler-050/";
            },},{id: "tokens-1-token-thos-p-yager-cross-keys",
          title: '1¢ Token — Thos. P. Yager, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-thos-p-yager-001/";
            },},{id: "tokens-2-token-thos-p-yager-cross-keys",
          title: '2¢ Token — Thos. P. Yager, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-thos-p-yager-002/";
            },},{id: "tokens-5-token-thos-p-yager-cross-keys",
          title: '5¢ Token — Thos. P. Yager, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-thos-p-yager-005/";
            },},{id: "tokens-10-token-thos-p-yager-cross-keys",
          title: '10¢ Token — Thos. P. Yager, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-thos-p-yager-010/";
            },},{id: "tokens-25-token-thos-p-yager-cross-keys",
          title: '25¢ Token — Thos. P. Yager, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-thos-p-yager-025/";
            },},{id: "tokens-50-token-thos-p-yager-cross-keys",
          title: '50¢ Token — Thos. P. Yager, Cross Keys',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/cross-keys-thos-p-yager-050/";
            },},{id: "tokens-1-token-cootes-amp-michael-dayton",
          title: '1¢ Token — Cootes &amp;amp; Michael, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-cootes-and-michael-001/";
            },},{id: "tokens-5-token-cootes-amp-michael-dayton",
          title: '5¢ Token — Cootes &amp;amp; Michael, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-cootes-and-michael-005/";
            },},{id: "tokens-10-token-cootes-amp-michael-dayton",
          title: '10¢ Token — Cootes &amp;amp; Michael, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-cootes-and-michael-010/";
            },},{id: "tokens-25-token-cootes-amp-michael-dayton",
          title: '25¢ Token — Cootes &amp;amp; Michael, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-cootes-and-michael-025/";
            },},{id: "tokens-50-token-cootes-amp-michael-dayton",
          title: '50¢ Token — Cootes &amp;amp; Michael, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-cootes-and-michael-050/";
            },},{id: "tokens-5-token-dayton-bakery-dayton",
          title: '5¢ Token — Dayton Bakery, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-dayton-bakery-005/";
            },},{id: "tokens-5-token-g-n-thacker-amp-co-dayton",
          title: '5¢ Token — G. N. Thacker &amp;amp; Co., Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-g-n-thacker-and-co-005/";
            },},{id: "tokens-25-token-g-n-thacker-amp-co-dayton",
          title: '25¢ Token — G. N. Thacker &amp;amp; Co., Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-g-n-thacker-and-co-025/";
            },},{id: "tokens-5-token-g-w-hedrick-amp-co-dayton",
          title: '5¢ Token — G. W. Hedrick &amp;amp; Co., Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-g-w-hedrick-and-co-005/";
            },},{id: "tokens-token-good-will-advertising-dayton",
          title: 'Token — Good Will Advertising, Dayton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-good-will-advertising-/";
            },},{id: "tokens-5-token-s-l-cootes-g-w-hedrick-amp-co-dayton",
          title: '5¢ Token — S. L. Cootes / G. W. Hedrick &amp;amp; Co., Dayton...',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-cootes-hedrick-005/";
            },},{id: "tokens-10-token-s-l-cootes-g-w-hedrick-amp-co-dayton",
          title: '10¢ Token — S. L. Cootes / G. W. Hedrick &amp;amp; Co., Dayton...',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-s-l-cootes-and-g-w-hedrick-and-co-010/";
            },},{id: "tokens-25-token-s-l-cootes-g-w-hedrick-amp-co-dayton",
          title: '25¢ Token — S. L. Cootes / G. W. Hedrick &amp;amp; Co., Dayton...',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-s-l-cootes-and-g-w-hedrick-and-co-025/";
            },},{id: "tokens-50-token-s-l-cootes-g-w-hedrick-amp-co-dayton",
          title: '50¢ Token — S. L. Cootes / G. W. Hedrick &amp;amp; Co., Dayton...',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/dayton-s-l-cootes-and-g-w-hedrick-and-co-050/";
            },},{id: "tokens-1-token-j-w-myers-amp-co-edom",
          title: '1¢ Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-001/";
            },},{id: "tokens-5-token-j-w-myers-amp-co-edom",
          title: '5¢ Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-005/";
            },},{id: "tokens-10-token-j-w-myers-amp-co-edom",
          title: '10¢ Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-010/";
            },},{id: "tokens-25-token-j-w-myers-amp-co-edom",
          title: '25¢ Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-025/";
            },},{id: "tokens-50-token-j-w-myers-amp-co-edom",
          title: '50¢ Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-050/";
            },},{id: "tokens-1-token-j-w-myers-amp-co-edom",
          title: '$1 Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-100/";
            },},{id: "tokens-5-token-j-w-myers-amp-co-edom",
          title: '$5 Token — J. W. Myers &amp;amp; Co., Edom',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/edom-j-w-myers-and-co-500/";
            },},{id: "tokens-10-token-22-zz-gibbs-amp-heard-elkton-amp-new-market",
          title: '10¢ Token — 22-ZZ / Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-22-zz-and-gibbs-and-heard-010/";
            },},{id: "tokens-1-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '1¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-001/";
            },},{id: "tokens-2-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '2¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-002/";
            },},{id: "tokens-5-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '5¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-005/";
            },},{id: "tokens-15-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '15¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-015/";
            },},{id: "tokens-25-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '25¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-025/";
            },},{id: "tokens-50-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '50¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-050/";
            },},{id: "tokens-75-token-gibbs-amp-heard-elkton-amp-new-market",
          title: '75¢ Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-075/";
            },},{id: "tokens-blank-token-gibbs-amp-heard-elkton-amp-new-market",
          title: 'Blank Token — Gibbs &amp;amp; Heard, Elkton &amp;amp; New Market',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-and-new-market-gibbs-and-heard-blank/";
            },},{id: "tokens-5-token-double-cola-elkton",
          title: '5¢ Token — Double-Cola, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-double-cola-005/";
            },},{id: "tokens-10-token-double-cola-elkton",
          title: '10¢ Token — Double-Cola, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-double-cola-010/";
            },},{id: "tokens-25-token-double-cola-elkton",
          title: '25¢ Token — Double-Cola, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-double-cola-025/";
            },},{id: "tokens-50-token-double-cola-elkton",
          title: '50¢ Token — Double-Cola, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-double-cola-050/";
            },},{id: "tokens-5-token-g-w-walton-amp-son-elkton",
          title: '5¢ Token — G. W. Walton &amp;amp; Son, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-g-w-walton-and-son-005/";
            },},{id: "tokens-10-token-g-w-walton-amp-son-elkton",
          title: '10¢ Token — G. W. Walton &amp;amp; Son, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-g-w-walton-and-son-010/";
            },},{id: "tokens-encased-cent-hensley-sales-and-service-elkton",
          title: 'Encased Cent — Hensley Sales and Service, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-hensley-encased-cent/";
            },},{id: "tokens-3-token-l-l-powell-elkton",
          title: '3¢ Token — L. L. Powell, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-l-l-powell-003/";
            },},{id: "tokens-1-token-spotswood-restaurant-elkton",
          title: '1¢ Token — Spotswood Restaurant, Elkton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-spotswood-restaurant-001/";
            },},{id: "tokens-1-token-spottswood-theatre-amp-cafe-elkton-a2",
          title: '1¢ Token — Spottswood Theatre &amp;amp; Cafe, Elkton (A2)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/elkton-a2-spottswood-theatre-and-cafe-001/";
            },},{id: "tokens-1-token-j-e-shaver-joseph-friedens",
          title: '1¢ Token — J. E. Shaver (Joseph), Friedens',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/friedens-j-e-shaver-joseph-001/";
            },},{id: "tokens-5-token-j-e-shaver-joseph-friedens",
          title: '5¢ Token — J. E. Shaver (Joseph), Friedens',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/friedens-j-e-shaver-joseph-005/";
            },},{id: "tokens-10-token-j-e-shaver-joseph-friedens",
          title: '10¢ Token — J. E. Shaver (Joseph), Friedens',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/friedens-j-e-shaver-joseph-010/";
            },},{id: "tokens-25-token-j-e-shaver-joseph-friedens",
          title: '25¢ Token — J. E. Shaver (Joseph), Friedens',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/friedens-j-e-shaver-joseph-025/";
            },},{id: "tokens-1-token-eppard-39-s-bargain-store-furnace",
          title: '1¢ Token — Eppard&amp;#39;s Bargain Store, Furnace',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/furnace-eppards-bargain-store-001/";
            },},{id: "tokens-10-token-eppard-39-s-bargain-store-furnace",
          title: '10¢ Token — Eppard&amp;#39;s Bargain Store, Furnace',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/furnace-eppards-bargain-store-010/";
            },},{id: "tokens-10-token-eppard-39-s-bargain-store-furnace-j-a-eppard-mgr",
          title: '10¢ Token — Eppard&amp;#39;s Bargain Store, Furnace (J.A. Eppard, Mgr.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/furnace-ja-eppard-mgr-eppards-bargain-store-010/";
            },},{id: "tokens-1-token-eppard-39-s-bargain-store-furnace-a-j-eppard-mgr",
          title: '$1 Token — Eppard&amp;#39;s Bargain Store, Furnace (A.J. Eppard, Mgr.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/furnace-aj-eppard-mgr-eppards-bargain-store-100/";
            },},{id: "tokens-10-token-h-k-rothgeb-amp-co-furnace",
          title: '10¢ Token — H. K. Rothgeb &amp;amp; Co., Furnace',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/furnace-h-k-rothgeb-and-co-010/";
            },},{id: "tokens-25-token-h-k-rothgeb-amp-co-furnace",
          title: '25¢ Token — H. K. Rothgeb &amp;amp; Co., Furnace',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/furnace-h-k-rothgeb-and-co-025/";
            },},{id: "tokens-5-token-custer-39-s-dept-store-genoa",
          title: '5¢ Token — Custer&amp;#39;s Dept. Store, Genoa',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/genoa-custers-dept-store-005/";
            },},{id: "tokens-10-token-custer-39-s-dept-store-genoa",
          title: '10¢ Token — Custer&amp;#39;s Dept. Store, Genoa',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/genoa-custers-dept-store-010/";
            },},{id: "tokens-25-token-custer-39-s-dept-store-genoa",
          title: '25¢ Token — Custer&amp;#39;s Dept. Store, Genoa',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/genoa-custers-dept-store-025/";
            },},{id: "tokens-50-token-m-j-meyerhoeffer-star-goods-mill",
          title: '50¢ Token — M. J. Meyerhoeffer (Star), Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-star-050/";
            },},{id: "tokens-1-token-m-j-meyerhoeffer-star-goods-mill",
          title: '$1 Token — M. J. Meyerhoeffer (Star), Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-star-100/";
            },},{id: "tokens-1-token-m-j-meyerhoeffer-jr-goods-mill",
          title: '1¢ Token — M. J. Meyerhoeffer Jr., Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-jr-001/";
            },},{id: "tokens-2-token-m-j-meyerhoeffer-jr-goods-mill",
          title: '2¢ Token — M. J. Meyerhoeffer Jr., Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-jr-002/";
            },},{id: "tokens-1-token-m-j-meyerhoeffer-goods-mill",
          title: '1¢ Token — M. J. Meyerhoeffer, Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-001/";
            },},{id: "tokens-5-token-m-j-meyerhoeffer-goods-mill",
          title: '5¢ Token — M. J. Meyerhoeffer, Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-005/";
            },},{id: "tokens-10-token-m-j-meyerhoeffer-goods-mill",
          title: '10¢ Token — M. J. Meyerhoeffer, Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-010/";
            },},{id: "tokens-25-token-m-j-meyerhoeffer-goods-mill",
          title: '25¢ Token — M. J. Meyerhoeffer, Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-025/";
            },},{id: "tokens-1-token-m-j-meyerhoeffer-goods-mill",
          title: '$1 Token — M. J. Meyerhoeffer, Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-m-j-meyerhoeffer-100/";
            },},{id: "tokens-5-token-m-j-m-jr-goods-mill",
          title: '5¢ Token — M.J.M. Jr., Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-mjm-jr-005/";
            },},{id: "tokens-10-token-m-j-m-jr-goods-mill",
          title: '10¢ Token — M.J.M. Jr., Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-mjm-jr-010-2/";
            },},{id: "tokens-10-token-m-j-m-jr-goods-mill",
          title: '10¢ Token — M.J.M. Jr., Goods Mill',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/goods-mill-mjm-jr-010/";
            },},{id: "tokens-5-token-davis-amp-good-grottoes",
          title: '5¢ Token — Davis &amp;amp; Good, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-good-005/";
            },},{id: "tokens-10-token-davis-amp-good-grottoes",
          title: '10¢ Token — Davis &amp;amp; Good, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-good-010/";
            },},{id: "tokens-25-token-davis-amp-good-grottoes",
          title: '25¢ Token — Davis &amp;amp; Good, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-good-025/";
            },},{id: "tokens-50-token-davis-amp-good-grottoes",
          title: '50¢ Token — Davis &amp;amp; Good, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-good-050/";
            },},{id: "tokens-1-token-davis-amp-good-grottoes",
          title: '$1 Token — Davis &amp;amp; Good, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-good-100/";
            },},{id: "tokens-5-token-davis-amp-mcclung-grottoes",
          title: '5¢ Token — Davis &amp;amp; McClung, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-mcclung-005/";
            },},{id: "tokens-10-token-davis-amp-mcclung-grottoes",
          title: '10¢ Token — Davis &amp;amp; McClung, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-mcclung-010/";
            },},{id: "tokens-25-token-davis-amp-mcclung-grottoes",
          title: '25¢ Token — Davis &amp;amp; McClung, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-mcclung-025/";
            },},{id: "tokens-50-token-davis-amp-mcclung-grottoes",
          title: '50¢ Token — Davis &amp;amp; McClung, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-mcclung-050/";
            },},{id: "tokens-1-token-davis-amp-mcclung-grottoes",
          title: '$1 Token — Davis &amp;amp; McClung, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-davis-and-mcclung-100/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-10/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-11/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-2/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-3/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-4/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-5/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-6/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-7/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-8/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001-9/";
            },},{id: "tokens-1-token-grand-caverns-grottoes",
          title: '1¢ Token — Grand Caverns, Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-grand-caverns-001/";
            },},{id: "tokens-5-token-kaylor-amp-co-grottoes",
          title: '5¢ Token — Kaylor &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-kaylor-and-co-005/";
            },},{id: "tokens-10-token-kaylor-amp-co-grottoes",
          title: '10¢ Token — Kaylor &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-kaylor-and-co-010/";
            },},{id: "tokens-25-token-kaylor-amp-co-grottoes",
          title: '25¢ Token — Kaylor &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-kaylor-and-co-025/";
            },},{id: "tokens-50-token-kaylor-amp-co-grottoes",
          title: '50¢ Token — Kaylor &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-kaylor-and-co-050/";
            },},{id: "tokens-5-token-pirkey-bros-grottoes",
          title: '5¢ Token — Pirkey Bros., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-pirkey-bros-005/";
            },},{id: "tokens-10-token-pirkey-bros-grottoes",
          title: '10¢ Token — Pirkey Bros., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-pirkey-bros-010/";
            },},{id: "tokens-25-token-pirkey-bros-grottoes",
          title: '25¢ Token — Pirkey Bros., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-pirkey-bros-025/";
            },},{id: "tokens-50-token-pirkey-bros-grottoes",
          title: '50¢ Token — Pirkey Bros., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-pirkey-bros-050/";
            },},{id: "tokens-1-token-pirkey-bros-grottoes",
          title: '$1 Token — Pirkey Bros., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-pirkey-bros-100/";
            },},{id: "tokens-1-token-w-a-leeth-amp-co-grottoes",
          title: '1¢ Token — W. A. Leeth &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-w-a-leeth-and-co-001/";
            },},{id: "tokens-5-token-w-a-leeth-amp-co-grottoes",
          title: '5¢ Token — W. A. Leeth &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-w-a-leeth-and-co-005/";
            },},{id: "tokens-10-token-w-a-leeth-amp-co-grottoes",
          title: '10¢ Token — W. A. Leeth &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-w-a-leeth-and-co-010/";
            },},{id: "tokens-25-token-w-a-leeth-amp-co-grottoes",
          title: '25¢ Token — W. A. Leeth &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-w-a-leeth-and-co-025/";
            },},{id: "tokens-50-token-w-a-leeth-amp-co-grottoes",
          title: '50¢ Token — W. A. Leeth &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-w-a-leeth-and-co-050/";
            },},{id: "tokens-1-token-w-a-leeth-amp-co-grottoes",
          title: '$1 Token — W. A. Leeth &amp;amp; Co., Grottoes',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/grottoes-w-a-leeth-and-co-100/";
            },},{id: "tokens-5-token-at-lowner-39-s-of-course-harrisonburg",
          title: '5¢ Token — At Lowner&amp;#39;s Of Course, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-at-lowners-of-course-005/";
            },},{id: "tokens-10-token-b-p-o-e-450-harrisonburg",
          title: '10¢ Token — B.P.O.E. #450, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-450-010/";
            },},{id: "tokens-25-token-b-p-o-e-450-harrisonburg",
          title: '25¢ Token — B.P.O.E. #450, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-450-025/";
            },},{id: "tokens-50-token-b-p-o-e-450-harrisonburg",
          title: '50¢ Token — B.P.O.E. #450, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-450-050/";
            },},{id: "tokens-1-token-b-p-o-e-450-harrisonburg",
          title: '$1 Token — B.P.O.E. #450, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-450-100/";
            },},{id: "tokens-5-token-b-p-o-e-elk-head-harrisonburg",
          title: '5¢ Token — B.P.O.E. / Elk Head, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-and-elk-head-005/";
            },},{id: "tokens-5-token-b-p-o-e-no-stars-harrisonburg",
          title: '5¢ Token — B.P.O.E. / No Stars, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-and-no-stars-005/";
            },},{id: "tokens-5-token-b-p-o-e-stars-harrisonburg",
          title: '5¢ Token — B.P.O.E. / Stars, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bpoe-and-stars-005/";
            },},{id: "tokens-0-token-bob-39-s-food-products-co-harrisonburg",
          title: '0¢ Token — Bob&amp;#39;s Food Products Co., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-bobs-food-products-co-000/";
            },},{id: "tokens-25-token-boyd-39-s-hairdressers-harrisonburg",
          title: '25¢ Token — Boyd&amp;#39;s Hairdressers, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-boyds-hairdressers-025/";
            },},{id: "tokens-10-token-c-a-sprinkel-amp-sons-harrisonburg",
          title: '10¢ Token — C. A. Sprinkel &amp;amp; Sons, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-c-a-sprinkel-and-sons-010/";
            },},{id: "tokens-1-token-c-b-rhodes-harrisonburg",
          title: '$1 Token — C. B. Rhodes, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-c-b-rhodes-100/";
            },},{id: "tokens-5-token-campbell-39-s-bakery-harrisonburg",
          title: '5¢ Token — Campbell&amp;#39;s Bakery, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-campbells-bakery-005/";
            },},{id: "tokens-5-token-d-f-garber-amp-co-harrisonburg",
          title: '5¢ Token — D. F. Garber &amp;amp; Co., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-d-f-garber-and-co-005/";
            },},{id: "tokens-0-token-firestone-auto-supply-harrisonburg",
          title: '0¢ Token — Firestone Auto Supply, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-firestone-auto-supply-000/";
            },},{id: "tokens-5-token-fletcher-39-s-pharmacy-5-crvd-harrisonburg",
          title: '5¢ Token — Fletcher&amp;#39;s Pharmacy 5 CRVD, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-fletchers-pharmacy-5-crvd-005/";
            },},{id: "tokens-5-token-fletcher-39-s-pharmacy-5-str8-harrisonburg",
          title: '5¢ Token — Fletcher&amp;#39;s Pharmacy 5 STR8, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-fletchers-pharmacy-5-str8-005/";
            },},{id: "tokens-5-token-friddle-39-s-restaurant-harrisonburg",
          title: '5¢ Token — Friddle&amp;#39;s Restaurant, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-friddles-restaurant-005/";
            },},{id: "tokens-10-token-friddle-39-s-restaurant-harrisonburg",
          title: '10¢ Token — Friddle&amp;#39;s Restaurant, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-friddles-restaurant-010/";
            },},{id: "tokens-50-token-friddle-39-s-restaurant-harrisonburg",
          title: '50¢ Token — Friddle&amp;#39;s Restaurant, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-friddles-restaurant-050/";
            },},{id: "tokens-tag-token-h-burg-bldg-amp-supply-co-harrisonburg",
          title: 'Tag Token — H-Burg Bldg. &amp;amp; Supply Co., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-h-burg-bldg-and-supply-co-tag/";
            },},{id: "tokens-5-token-h-j-o-39-donnell-harrisonburg",
          title: '5¢ Token — H. J. O&amp;#39;Donnell, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-h-j-odonnell-005/";
            },},{id: "tokens-5-token-hose-company-4-harrisonburg",
          title: '5¢ Token — Hose Company 4, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-hose-company-4-005/";
            },},{id: "tokens-5-token-i-c-oates-harrisonburg",
          title: '5¢ Token — I. C. Oates, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-i-c-oates-005/";
            },},{id: "tokens-50-token-i-c-oates-harrisonburg",
          title: '50¢ Token — I. C. Oates, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-i-c-oates-050/";
            },},{id: "tokens-0-token-j-c-neff-harrisonburg",
          title: '0¢ Token — J. C. Neff, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-j-c-neff-000/";
            },},{id: "tokens-5-token-j-m-kavanaugh-harrisonburg",
          title: '5¢ Token — J. M. Kavanaugh, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-j-m-kavanaugh-005/";
            },},{id: "tokens-10-token-j-m-kavanaugh-harrisonburg",
          title: '10¢ Token — J. M. Kavanaugh, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-j-m-kavanaugh-010/";
            },},{id: "tokens-1-token-j-s-denton-amp-son-inc-harrisonburg",
          title: '$1 Token — J. S. Denton &amp;amp; Son Inc., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-j-s-denton-and-son-inc-100/";
            },},{id: "tokens-token-kay-jewelers-harrisonburg",
          title: '##### Token — Kay Jewelers, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-kay-jewelers-/";
            },},{id: "tokens-loaf-token-l-e-friddle-harrisonburg",
          title: 'Loaf Token — L. E. Friddle, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-l-e-friddle-loaf-2/";
            },},{id: "tokens-loaf-token-l-e-friddle-harrisonburg",
          title: 'Loaf Token — L. E. Friddle, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-l-e-friddle-loaf/";
            },},{id: "tokens-1-token-l-h-brown-harrisonburg",
          title: '1¢ Token — L. H. Brown, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-l-h-brown-001/";
            },},{id: "tokens-10-token-l-h-brown-harrisonburg",
          title: '10¢ Token — L. H. Brown, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-l-h-brown-010/";
            },},{id: "tokens-1-token-leggett-39-s-dept-store-harrisonburg",
          title: '1¢ Token — Leggett&amp;#39;s Dept. Store, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-leggetts-dept-store-001/";
            },},{id: "tokens-5-token-loewner-39-s-on-the-square-harrisonburg",
          title: '5¢ Token — Loewner&amp;#39;s On The Square, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-loewners-on-the-square-005/";
            },},{id: "tokens-1-token-lovett-bros-harrisonburg-win-amp-staunton",
          title: '1¢ Token — Lovett Bros., Harrisonburg (Win. &amp;amp; Staunton)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-win-and-staunton-lovett-bros-001/";
            },},{id: "tokens-1-token-m-amp-f-ney-jewelers-harrisonburg",
          title: '1¢ Token — M. &amp;amp; F. Ney, Jewelers, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-m-and-f-ney-jewelers-001/";
            },},{id: "tokens-5-token-m-w-of-a-camp-11485-harrisonburg",
          title: '5¢ Token — M. W. of A. Camp #11485, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-m-w-of-a-camp-11485-005/";
            },},{id: "tokens-25-token-m-w-of-a-camp-11485-harrisonburg",
          title: '25¢ Token — M. W. of A. Camp #11485, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-m-w-of-a-camp-11485-025/";
            },},{id: "tokens-1-token-miller-39-s-bargain-store-harrisonburg",
          title: '1¢ Token — Miller&amp;#39;s Bargain Store, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-millers-bargain-store-001/";
            },},{id: "tokens-2-token-miller-39-s-bargain-store-harrisonburg",
          title: '2¢ Token — Miller&amp;#39;s Bargain Store, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-millers-bargain-store-002/";
            },},{id: "tokens-5-token-miller-39-s-bargain-store-harrisonburg",
          title: '5¢ Token — Miller&amp;#39;s Bargain Store, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-millers-bargain-store-005/";
            },},{id: "tokens-play-token-rockhm-memorial-hospital-harrisonburg",
          title: 'Play Token — Rockhm. Memorial Hospital, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-rockhm-memorial-hospital-play/";
            },},{id: "tokens-shkl-token-rockingham-chapter-harrisonburg-masons",
          title: 'Shkl Token — Rockingham Chapter, Harrisonburg (Masons)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-masons-rockingham-chapter-shkl/";
            },},{id: "tokens-cupn-token-rockingham-milling-harrisonburg",
          title: 'Cupn. Token — Rockingham Milling, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-rockingham-milling-cupn/";
            },},{id: "tokens-1-token-state-teachers-college-harrisonburg-green",
          title: '1¢ Token — State Teachers College, Harrisonburg (Green)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-green-state-teachers-college-001/";
            },},{id: "tokens-1-token-state-teachers-college-harrisonburg-gry-grn",
          title: '1¢ Token — State Teachers College, Harrisonburg (Gry-Grn)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-gry-grn-state-teachers-college-001/";
            },},{id: "tokens-2-token-state-teachers-college-harrisonburg",
          title: '2¢ Token — State Teachers College, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-state-teachers-college-002/";
            },},{id: "tokens-25-token-state-teachers-college-harrisonburg",
          title: '25¢ Token — State Teachers College, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-state-teachers-college-025/";
            },},{id: "tokens-50-token-state-teachers-college-harrisonburg",
          title: '50¢ Token — State Teachers College, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-state-teachers-college-050/";
            },},{id: "tokens-1-token-state-teachers-college-harrisonburg",
          title: '$1 Token — State Teachers College, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-state-teachers-college-100/";
            },},{id: "tokens-2-token-state-teachers-college-harrisonburg",
          title: '$2 Token — State Teachers College, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-state-teachers-college-200/";
            },},{id: "tokens-1-token-the-first-national-bank-harrisonburg",
          title: '1¢ Token — The First National Bank, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-the-first-national-bank-001/";
            },},{id: "tokens-1-token-tully-39-s-harrisonburg",
          title: '$1 Token — Tully&amp;#39;s, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-tullys-100/";
            },},{id: "tokens-5-token-valley-lumber-corp-harrisonburg-not-trns",
          title: '5¢ Token — Valley Lumber Corp., Harrisonburg (Not Trns)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-not-trns-valley-lumber-corp-005/";
            },},{id: "tokens-5-token-valley-lumber-corp-harrisonburg",
          title: '5¢ Token — Valley Lumber Corp., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-valley-lumber-corp-005/";
            },},{id: "tokens-10-token-valley-lumber-corp-harrisonburg-not-trns",
          title: '10¢ Token — Valley Lumber Corp., Harrisonburg (Not Trns)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-not-trns-valley-lumber-corp-010/";
            },},{id: "tokens-10-token-valley-lumber-corp-harrisonburg",
          title: '10¢ Token — Valley Lumber Corp., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-valley-lumber-corp-010/";
            },},{id: "tokens-25-token-valley-lumber-corp-harrisonburg",
          title: '25¢ Token — Valley Lumber Corp., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-valley-lumber-corp-025/";
            },},{id: "tokens-50-token-valley-lumber-corp-harrisonburg-not-trns",
          title: '50¢ Token — Valley Lumber Corp., Harrisonburg (Not Trns)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-not-trns-valley-lumber-corp-050/";
            },},{id: "tokens-50-token-valley-lumber-corp-harrisonburg",
          title: '50¢ Token — Valley Lumber Corp., Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-valley-lumber-corp-050/";
            },},{id: "tokens-5-token-veteran-39-s-club-harrisonburg",
          title: '5¢ Token — Veteran&amp;#39;s Club, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-veterans-club-005/";
            },},{id: "tokens-5-token-w-e-friddle-39-s-arcade-harrisonburg",
          title: '5¢ Token — W. E. Friddle&amp;#39;s Arcade, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-w-e-friddles-arcade-005/";
            },},{id: "tokens-10-token-w-e-friddle-39-s-arcade-harrisonburg",
          title: '10¢ Token — W. E. Friddle&amp;#39;s Arcade, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-w-e-friddles-arcade-010/";
            },},{id: "tokens-1-token-w-m-menifee-wm-mcatee-harrisonburg",
          title: '1¢ Token — W. M. Menifee (Wm. McAtee), Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-w-m-menifee-wm-mcatee-001/";
            },},{id: "tokens-medl-token-waterman-school-harrisonburg",
          title: 'Medl. Token — Waterman School, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-waterman-school-medl/";
            },},{id: "tokens-token-wilson-jewelers-harrisonburg",
          title: '##### Token — Wilson Jewelers, Harrisonburg',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/harrisonburg-wilson-jewelers-/";
            },},{id: "tokens-1-token-hinton-pants-store-hinton",
          title: '1¢ Token — Hinton Pants Store, Hinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/hinton-hinton-pants-store-001/";
            },},{id: "tokens-1-token-d-e-hoover-hoover",
          title: '1¢ Token — D. E. Hoover, Hoover',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/hoover-d-e-hoover-001/";
            },},{id: "tokens-5-token-d-e-hoover-hoover",
          title: '5¢ Token — D. E. Hoover, Hoover',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/hoover-d-e-hoover-005/";
            },},{id: "tokens-25-token-c-j-kite-calvin-island-ford",
          title: '25¢ Token — C. J. Kite (Calvin), Island Ford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/island-ford-c-j-kite-calvin-025/";
            },},{id: "tokens-5-token-a-d-bertram-amp-co-keezletown",
          title: '5¢ Token — A. D. Bertram &amp;amp; Co., Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-a-d-bertram-and-co-005/";
            },},{id: "tokens-25-token-j-e-templeman-co-keezletown",
          title: '25¢ Token — J. E. Templeman Co., Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-templeman-025/";
            },},{id: "tokens-1-token-m-e-partlow-keezletown",
          title: '1¢ Token — M. E. Partlow, Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-m-e-partlow-001/";
            },},{id: "tokens-5-token-m-e-partlow-keezletown",
          title: '5¢ Token — M. E. Partlow, Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-m-e-partlow-005/";
            },},{id: "tokens-10-token-m-e-partlow-keezletown",
          title: '10¢ Token — M. E. Partlow, Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-m-e-partlow-010/";
            },},{id: "tokens-25-token-m-e-partlow-keezletown",
          title: '25¢ Token — M. E. Partlow, Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-m-e-partlow-025/";
            },},{id: "tokens-1-token-m-e-partlow-keezletown",
          title: '$1 Token — M. E. Partlow, Keezletown',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/keezletown-m-e-partlow-100/";
            },},{id: "tokens-1-token-higgs-amp-summers-cash-store-lacey-spring",
          title: '1¢ Token — Higgs &amp;amp; Summers Cash Store, Lacey Spring',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lacey-spring-higgs-and-summers-cash-store-001/";
            },},{id: "tokens-10-token-higgs-amp-summers-cash-store-lacey-spring",
          title: '10¢ Token — Higgs &amp;amp; Summers Cash Store, Lacey Spring',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lacey-spring-higgs-and-summers-cash-store-010/";
            },},{id: "tokens-25-token-higgs-amp-summers-cash-store-lacey-spring",
          title: '25¢ Token — Higgs &amp;amp; Summers Cash Store, Lacey Spring',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lacey-spring-higgs-and-summers-cash-store-025/";
            },},{id: "tokens-1-token-higgs-amp-summers-cash-store-lacey-spring",
          title: '$1 Token — Higgs &amp;amp; Summers Cash Store, Lacey Spring',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lacey-spring-higgs-and-summers-cash-store-100/";
            },},{id: "tokens-25-token-the-sipe-amp-arey-co-87-lilly",
          title: '25¢ Token — The Sipe &amp;amp; Arey Co. #87, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-sipearey-025/";
            },},{id: "tokens-1-token-w-h-sipe-lilly",
          title: '1¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-001-2/";
            },},{id: "tokens-1-token-w-h-sipe-lilly",
          title: '1¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-001/";
            },},{id: "tokens-3-token-w-h-sipe-lilly",
          title: '3¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-003/";
            },},{id: "tokens-5-token-w-h-sipe-lilly",
          title: '5¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-005/";
            },},{id: "tokens-10-token-w-h-sipe-lilly",
          title: '10¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-010/";
            },},{id: "tokens-20-token-w-h-sipe-lilly",
          title: '20¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-020/";
            },},{id: "tokens-25-token-w-h-sipe-lilly",
          title: '25¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-025-2/";
            },},{id: "tokens-25-token-w-h-sipe-lilly",
          title: '25¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-025/";
            },},{id: "tokens-30-token-w-h-sipe-lilly",
          title: '30¢ Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-030/";
            },},{id: "tokens-1-token-w-h-sipe-lilly",
          title: '$1 Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-100-2/";
            },},{id: "tokens-1-token-w-h-sipe-lilly",
          title: '$1 Token — W. H. Sipe, Lilly',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lilly-w-h-sipe-100/";
            },},{id: "tokens-1-token-lynnwood-mercantile-co-lynnwood",
          title: '1¢ Token — Lynnwood Mercantile Co, Lynnwood',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lynnwood-lynnwood-mercantile-co-001/";
            },},{id: "tokens-5-token-lynnwood-mercantile-co-lynnwood",
          title: '5¢ Token — Lynnwood Mercantile Co, Lynnwood',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lynnwood-lynnwood-mercantile-co-005/";
            },},{id: "tokens-10-token-lynnwood-mercantile-co-lynnwood",
          title: '10¢ Token — Lynnwood Mercantile Co, Lynnwood',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lynnwood-lynnwood-mercantile-co-010/";
            },},{id: "tokens-25-token-lynnwood-mercantile-co-lynnwood",
          title: '25¢ Token — Lynnwood Mercantile Co, Lynnwood',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lynnwood-lynnwood-mercantile-co-025/";
            },},{id: "tokens-1-token-lynnwood-mercantile-co-lynnwood",
          title: '$1 Token — Lynnwood Mercantile Co, Lynnwood',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/lynnwood-lynnwood-mercantile-co-100/";
            },},{id: "tokens-1-token-j-k-mauzy-amp-son-mauzy",
          title: '1¢ Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-001/";
            },},{id: "tokens-5-token-j-k-mauzy-amp-son-mauzy",
          title: '5¢ Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-005/";
            },},{id: "tokens-10-token-j-k-mauzy-amp-son-mauzy",
          title: '10¢ Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-010/";
            },},{id: "tokens-25-token-j-k-mauzy-amp-son-mauzy",
          title: '25¢ Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-025/";
            },},{id: "tokens-50-token-j-k-mauzy-amp-son-mauzy",
          title: '50¢ Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-050/";
            },},{id: "tokens-1-token-j-k-mauzy-amp-son-mauzy",
          title: '$1 Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-100/";
            },},{id: "tokens-5-token-j-k-mauzy-amp-son-mauzy",
          title: '$5 Token — J. K. Mauzy &amp;amp; Son, Mauzy',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mauzy-j-k-mauzy-and-son-500/";
            },},{id: "tokens-1-token-d-osburn-jr-mcgaheysville",
          title: '1¢ Token — D. Osburn Jr., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-d-osburn-jr-001/";
            },},{id: "tokens-5-token-d-osburn-jr-mcgaheysville",
          title: '5¢ Token — D. Osburn Jr., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-d-osburn-jr-005/";
            },},{id: "tokens-10-token-d-osburn-jr-mcgaheysville",
          title: '10¢ Token — D. Osburn Jr., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-d-osburn-jr-010/";
            },},{id: "tokens-25-token-d-osburn-jr-mcgaheysville",
          title: '25¢ Token — D. Osburn Jr., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-d-osburn-jr-025/";
            },},{id: "tokens-50-token-d-osburn-jr-mcgaheysville",
          title: '50¢ Token — D. Osburn Jr., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-d-osburn-jr-050/";
            },},{id: "tokens-1-token-d-osburn-jr-mcgaheysville",
          title: '$1 Token — D. Osburn Jr., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-d-osburn-jr-100/";
            },},{id: "tokens-1-token-harmon-amp-harmon-mcgaheysville",
          title: '1¢ Token — Harmon &amp;amp; Harmon, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harmon-and-harmon-001/";
            },},{id: "tokens-5-token-harmon-amp-harmon-mcgaheysville",
          title: '5¢ Token — Harmon &amp;amp; Harmon, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harmon-and-harmon-005/";
            },},{id: "tokens-10-token-harmon-amp-harmon-mcgaheysville",
          title: '10¢ Token — Harmon &amp;amp; Harmon, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harmon-and-harmon-010/";
            },},{id: "tokens-25-token-harmon-amp-harmon-mcgaheysville",
          title: '25¢ Token — Harmon &amp;amp; Harmon, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harmon-and-harmon-025/";
            },},{id: "tokens-50-token-harmon-amp-harmon-mcgaheysville",
          title: '50¢ Token — Harmon &amp;amp; Harmon, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harmon-and-harmon-050/";
            },},{id: "tokens-1-token-harmon-amp-harmon-mcgaheysville",
          title: '$1 Token — Harmon &amp;amp; Harmon, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harmon-and-harmon-100/";
            },},{id: "tokens-5-token-harris-bros-mcgaheysville",
          title: '5¢ Token — Harris Bros., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harris-bros-005/";
            },},{id: "tokens-10-token-harris-bros-mcgaheysville",
          title: '10¢ Token — Harris Bros., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harris-bros-010/";
            },},{id: "tokens-25-token-harris-bros-mcgaheysville",
          title: '25¢ Token — Harris Bros., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harris-bros-025/";
            },},{id: "tokens-50-token-harris-bros-mcgaheysville",
          title: '50¢ Token — Harris Bros., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harris-bros-050/";
            },},{id: "tokens-1-token-harris-bros-mcgaheysville",
          title: '$1 Token — Harris Bros., McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-harris-bros-100/";
            },},{id: "tokens-1-token-mauzy-amp-armentrout-mcgaheysville",
          title: '1¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-001-2/";
            },},{id: "tokens-1-token-mauzy-amp-armentrout-mcgaheysville",
          title: '1¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-001-3/";
            },},{id: "tokens-1-token-mauzy-amp-armentrout-mcgaheysville",
          title: '1¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-001/";
            },},{id: "tokens-2-token-mauzy-amp-armentrout-mcgaheysville",
          title: '2¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-002-2/";
            },},{id: "tokens-2-token-mauzy-amp-armentrout-mcgaheysville",
          title: '2¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-002/";
            },},{id: "tokens-5-token-mauzy-amp-armentrout-mcgaheysville",
          title: '5¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-005-2/";
            },},{id: "tokens-5-token-mauzy-amp-armentrout-mcgaheysville",
          title: '5¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-005-3/";
            },},{id: "tokens-5-token-mauzy-amp-armentrout-mcgaheysville",
          title: '5¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-005/";
            },},{id: "tokens-25-token-mauzy-amp-armentrout-mcgaheysville",
          title: '25¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-025-2/";
            },},{id: "tokens-25-token-mauzy-amp-armentrout-mcgaheysville",
          title: '25¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-025-3/";
            },},{id: "tokens-25-token-mauzy-amp-armentrout-mcgaheysville",
          title: '25¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-025/";
            },},{id: "tokens-50-token-mauzy-amp-armentrout-mcgaheysville",
          title: '50¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-050-2/";
            },},{id: "tokens-50-token-mauzy-amp-armentrout-mcgaheysville",
          title: '50¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-050-3/";
            },},{id: "tokens-50-token-mauzy-amp-armentrout-mcgaheysville",
          title: '50¢ Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-050/";
            },},{id: "tokens-1-token-mauzy-amp-armentrout-mcgaheysville",
          title: '$1 Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-100-2/";
            },},{id: "tokens-1-token-mauzy-amp-armentrout-mcgaheysville",
          title: '$1 Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-100/";
            },},{id: "tokens-2-token-mauzy-amp-armentrout-mcgaheysville",
          title: '$2 Token — Mauzy &amp;amp; Armentrout, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-mauzy-and-armentrout-200/";
            },},{id: "tokens-5-token-n-wilson-davis-mcgaheysville",
          title: '5¢ Token — N. Wilson Davis, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-n-wilson-davis-005/";
            },},{id: "tokens-5-token-w-a-herron-mcgaheysville",
          title: '5¢ Token — W. A. Herron, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-w-a-herron-005/";
            },},{id: "tokens-50-token-w-a-herron-mcgaheysville",
          title: '50¢ Token — W. A. Herron, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-w-a-herron-050/";
            },},{id: "tokens-10-token-w-r-hoffman-mcgaheysville",
          title: '10¢ Token — W. R. Hoffman, McGaheysville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mcgaheysville-w-r-hoffman-010/";
            },},{id: "tokens-1-token-f-w-meyerhoeffer-meyerhoeffers-store",
          title: '1¢ Token — F. W. Meyerhoeffer, Meyerhoeffers Store',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/meyerhoeffers-store-f-w-meyerhoeffer-001/";
            },},{id: "tokens-2-token-f-w-meyerhoeffer-meyerhoeffers-store",
          title: '2¢ Token — F. W. Meyerhoeffer, Meyerhoeffers Store',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/meyerhoeffers-store-f-w-meyerhoeffer-002/";
            },},{id: "tokens-25-token-f-w-meyerhoeffer-meyerhoeffers-store",
          title: '25¢ Token — F. W. Meyerhoeffer, Meyerhoeffers Store',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/meyerhoeffers-store-f-w-meyerhoeffer-025/";
            },},{id: "tokens-1-token-e-herring-amp-co-model",
          title: '1¢ Token — E. Herring &amp;amp; Co., Model',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/model-e-herring-and-co-001/";
            },},{id: "tokens-5-token-e-herring-amp-co-model",
          title: '5¢ Token — E. Herring &amp;amp; Co., Model',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/model-e-herring-and-co-005/";
            },},{id: "tokens-10-token-e-herring-amp-co-model",
          title: '10¢ Token — E. Herring &amp;amp; Co., Model',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/model-e-herring-and-co-010/";
            },},{id: "tokens-25-token-e-herring-amp-co-model",
          title: '25¢ Token — E. Herring &amp;amp; Co., Model',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/model-e-herring-and-co-025/";
            },},{id: "tokens-50-token-e-herring-amp-co-model",
          title: '50¢ Token — E. Herring &amp;amp; Co., Model',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/model-e-herring-and-co-050/";
            },},{id: "tokens-1-token-e-herring-amp-co-model",
          title: '$1 Token — E. Herring &amp;amp; Co., Model',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/model-e-herring-and-co-100/";
            },},{id: "tokens-5-token-gochenour-brothers-montevideo",
          title: '5¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-005-2/";
            },},{id: "tokens-5-token-gochenour-brothers-montevideo",
          title: '5¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-005/";
            },},{id: "tokens-10-token-gochenour-brothers-montevideo",
          title: '10¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-010-2/";
            },},{id: "tokens-10-token-gochenour-brothers-montevideo",
          title: '10¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-010-3/";
            },},{id: "tokens-10-token-gochenour-brothers-montevideo",
          title: '10¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-010/";
            },},{id: "tokens-25-token-gochenour-brothers-montevideo",
          title: '25¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-025/";
            },},{id: "tokens-50-token-gochenour-brothers-montevideo",
          title: '50¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-050-2/";
            },},{id: "tokens-50-token-gochenour-brothers-montevideo",
          title: '50¢ Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-050/";
            },},{id: "tokens-1-token-gochenour-brothers-montevideo",
          title: '$1 Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-100-2/";
            },},{id: "tokens-1-token-gochenour-brothers-montevideo",
          title: '$1 Token — Gochenour Brothers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-gochenour-brothers-100/";
            },},{id: "tokens-1-token-h-a-souers-montevideo",
          title: '1¢ Token — H. A. Souers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-h-a-souers-001/";
            },},{id: "tokens-5-token-h-a-souers-montevideo",
          title: '5¢ Token — H. A. Souers, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-h-a-souers-005/";
            },},{id: "tokens-1-token-huffman-amp-rhodes-montevideo",
          title: '1¢ Token — Huffman &amp;amp; Rhodes, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-huffman-and-rhodes-001/";
            },},{id: "tokens-25-token-huffman-amp-rhodes-montevideo",
          title: '25¢ Token — Huffman &amp;amp; Rhodes, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-huffman-and-rhodes-025/";
            },},{id: "tokens-1-token-huffman-amp-rhodes-montevideo",
          title: '$1 Token — Huffman &amp;amp; Rhodes, Montevideo',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montevideo-huffman-and-rhodes-100/";
            },},{id: "tokens-1-token-a-b-glick-montezuma",
          title: '1¢ Token — A. B. Glick, Montezuma',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montezuma-a-b-glick-001/";
            },},{id: "tokens-5-token-a-b-glick-montezuma",
          title: '5¢ Token — A. B. Glick, Montezuma',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montezuma-a-b-glick-005/";
            },},{id: "tokens-10-token-a-b-glick-montezuma",
          title: '10¢ Token — A. B. Glick, Montezuma',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/montezuma-a-b-glick-010/";
            },},{id: "tokens-50-token-a-b-driver-mt-clinton",
          title: '50¢ Token — A. B. Driver, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-a-b-driver-050/";
            },},{id: "tokens-1-token-w-c-wampler-mt-clinton",
          title: '1¢ Token — W. C. Wampler, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-c-wampler-001/";
            },},{id: "tokens-5-token-w-c-wampler-mt-clinton",
          title: '5¢ Token — W. C. Wampler, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-c-wampler-005/";
            },},{id: "tokens-10-token-w-c-wampler-mt-clinton",
          title: '10¢ Token — W. C. Wampler, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-c-wampler-010/";
            },},{id: "tokens-1-token-w-c-wampler-mt-clinton",
          title: '$1 Token — W. C. Wampler, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-c-wampler-100/";
            },},{id: "tokens-1-token-w-e-long-amp-sons-flower-mt-clinton",
          title: '$1 Token — W. E. Long &amp;amp; Sons (Flower), Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-flower-100/";
            },},{id: "tokens-5-token-w-e-long-amp-sons-mt-clinton",
          title: '5¢ Token — W. E. Long &amp;amp; Sons, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-005/";
            },},{id: "tokens-10-token-w-e-long-amp-sons-mt-clinton",
          title: '10¢ Token — W. E. Long &amp;amp; Sons, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-010/";
            },},{id: "tokens-25-token-w-e-long-amp-sons-mt-clinton",
          title: '25¢ Token — W. E. Long &amp;amp; Sons, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-025/";
            },},{id: "tokens-50-token-w-e-long-amp-sons-mt-clinton",
          title: '50¢ Token — W. E. Long &amp;amp; Sons, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-050/";
            },},{id: "tokens-1-token-w-e-long-amp-sons-mt-clinton",
          title: '$1 Token — W. E. Long &amp;amp; Sons, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-100/";
            },},{id: "tokens-5-token-w-e-long-amp-sons-mt-clinton",
          title: '$5 Token — W. E. Long &amp;amp; Sons, Mt. Clinton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-clinton-w-e-long-and-sons-500/";
            },},{id: "tokens-1-token-a-s-houff-mt-crawford",
          title: '1¢ Token — A. S. Houff, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-a-s-houff-001/";
            },},{id: "tokens-5-token-a-s-houff-mt-crawford",
          title: '5¢ Token — A. S. Houff, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-a-s-houff-005/";
            },},{id: "tokens-10-token-a-s-houff-mt-crawford",
          title: '10¢ Token — A. S. Houff, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-a-s-houff-010/";
            },},{id: "tokens-25-token-a-s-houff-mt-crawford",
          title: '25¢ Token — A. S. Houff, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-a-s-houff-025/";
            },},{id: "tokens-1-token-a-s-houff-mt-crawford",
          title: '$1 Token — A. S. Houff, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-a-s-houff-100/";
            },},{id: "tokens-5-token-j-t-johnson-mt-crawford",
          title: '5¢ Token — J. T. Johnson, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-j-t-johnson-005/";
            },},{id: "tokens-25-token-j-t-johnson-mt-crawford",
          title: '25¢ Token — J. T. Johnson, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-j-t-johnson-025/";
            },},{id: "tokens-1-token-lago-and-ballentine-mt-crawford",
          title: '1¢ Token — Lago and Ballentine, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-lago-and-ballentine-001/";
            },},{id: "tokens-5-token-lago-and-ballentine-mt-crawford",
          title: '5¢ Token — Lago and Ballentine, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-lago-and-ballentine-005/";
            },},{id: "tokens-1-token-lago-and-ballentine-mt-crawford",
          title: '$1 Token — Lago and Ballentine, Mt. Crawford',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/mt-crawford-lago-and-ballentine-100/";
            },},{id: "tokens-5-token-kaylor-brothers-north-river",
          title: '5¢ Token — Kaylor Brothers, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-kaylor-brothers-005/";
            },},{id: "tokens-10-token-kaylor-brothers-north-river",
          title: '10¢ Token — Kaylor Brothers, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-kaylor-brothers-010/";
            },},{id: "tokens-25-token-kaylor-brothers-north-river",
          title: '25¢ Token — Kaylor Brothers, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-kaylor-brothers-025/";
            },},{id: "tokens-lunch-token-north-river-high-school-north-river",
          title: 'Lunch Token — North River High School, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-north-river-high-school-lunch/";
            },},{id: "tokens-1-token-wine-amp-burgess-north-river",
          title: '1¢ Token — Wine &amp;amp; Burgess, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-wine-and-burgess-001/";
            },},{id: "tokens-5-token-wine-amp-burgess-north-river",
          title: '5¢ Token — Wine &amp;amp; Burgess, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-wine-and-burgess-005/";
            },},{id: "tokens-10-token-wine-amp-burgess-north-river",
          title: '10¢ Token — Wine &amp;amp; Burgess, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-wine-and-burgess-010/";
            },},{id: "tokens-50-token-wine-amp-burgess-north-river",
          title: '50¢ Token — Wine &amp;amp; Burgess, North River',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/north-river-wine-and-burgess-050/";
            },},{id: "tokens-5-token-floyd-amp-wintermyer-ottobine",
          title: '5¢ Token — Floyd &amp;amp; Wintermyer, Ottobine',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/ottobine-floyd-and-wintermyer-005/";
            },},{id: "tokens-10-token-floyd-amp-wintermyer-ottobine",
          title: '10¢ Token — Floyd &amp;amp; Wintermyer, Ottobine',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/ottobine-floyd-and-wintermyer-010/";
            },},{id: "tokens-50-token-floyd-amp-wintermyer-ottobine",
          title: '50¢ Token — Floyd &amp;amp; Wintermyer, Ottobine',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/ottobine-floyd-and-wintermyer-050/";
            },},{id: "tokens-1-token-e-w-carpenter-pleasant-valley",
          title: '1¢ Token — E. W. Carpenter, Pleasant Valley',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/pleasant-valley-e-w-carpenter-001/";
            },},{id: "tokens-5-token-e-w-carpenter-pleasant-valley",
          title: '5¢ Token — E. W. Carpenter, Pleasant Valley',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/pleasant-valley-e-w-carpenter-005/";
            },},{id: "tokens-25-token-e-w-carpenter-pleasant-valley",
          title: '25¢ Token — E. W. Carpenter, Pleasant Valley',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/pleasant-valley-e-w-carpenter-025/";
            },},{id: "tokens-5-token-t-j-johnson-pleasant-valley",
          title: '5¢ Token — T. J. Johnson, Pleasant Valley',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/pleasant-valley-t-j-johnson-005/";
            },},{id: "tokens-25-token-t-j-johnson-pleasant-valley",
          title: '25¢ Token — T. J. Johnson, Pleasant Valley',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/pleasant-valley-t-j-johnson-025/";
            },},{id: "tokens-10-token-e-r-armentrout-port-republic-amp-staunton",
          title: '10¢ Token — E. R. Armentrout, Port Republic &amp;amp; Staunton',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-and-staunton-e-r-armentrout-010/";
            },},{id: "tokens-1-token-jno-f-miller-port-republic",
          title: '1¢ Token — Jno. F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-jno-f-miller-001/";
            },},{id: "tokens-2-token-jno-f-miller-port-republic",
          title: '2¢ Token — Jno. F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-jno-f-miller-002/";
            },},{id: "tokens-10-token-jno-f-miller-port-republic",
          title: '10¢ Token — Jno. F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-jno-f-miller-010/";
            },},{id: "tokens-1-token-jno-f-miller-port-republic",
          title: '$1 Token — Jno. F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-jno-f-miller-100/";
            },},{id: "tokens-1-token-john-f-miller-port-republic",
          title: '1¢ Token — John F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-john-f-miller-001/";
            },},{id: "tokens-10-token-john-f-miller-port-republic",
          title: '10¢ Token — John F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-john-f-miller-010/";
            },},{id: "tokens-25-token-john-f-miller-port-republic",
          title: '25¢ Token — John F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-john-f-miller-025/";
            },},{id: "tokens-1-token-john-f-miller-port-republic",
          title: '$1 Token — John F. Miller, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-john-f-miller-100/";
            },},{id: "tokens-5-token-l-e-lee-port-republic",
          title: '5¢ Token — L. E. Lee, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-e-lee-005/";
            },},{id: "tokens-25-token-l-e-lee-port-republic",
          title: '25¢ Token — L. E. Lee, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-e-lee-025/";
            },},{id: "tokens-50-token-l-e-lee-port-republic",
          title: '50¢ Token — L. E. Lee, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-e-lee-050/";
            },},{id: "tokens-1-token-l-w-smith-amp-bro-port-republic",
          title: '1¢ Token — L. W. Smith &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-w-smith-and-bro-001/";
            },},{id: "tokens-5-token-l-w-smith-amp-bro-port-republic",
          title: '5¢ Token — L. W. Smith &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-w-smith-and-bro-005/";
            },},{id: "tokens-10-token-l-w-smith-amp-bro-port-republic",
          title: '10¢ Token — L. W. Smith &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-w-smith-and-bro-010/";
            },},{id: "tokens-25-token-l-w-smith-amp-bro-port-republic",
          title: '25¢ Token — L. W. Smith &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-w-smith-and-bro-025/";
            },},{id: "tokens-50-token-l-w-smith-amp-bro-port-republic",
          title: '50¢ Token — L. W. Smith &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-w-smith-and-bro-050/";
            },},{id: "tokens-1-token-l-w-smith-amp-bro-port-republic",
          title: '$1 Token — L. W. Smith &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-l-w-smith-and-bro-100/";
            },},{id: "tokens-1-token-m-a-davis-1ct-on-obverse-port-republic",
          title: '1¢ Token — M. A. Davis (1ct on Obverse), Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-a-davis-1ct-on-obverse-001/";
            },},{id: "tokens-1-token-m-a-davis-1ct-on-reverse-port-republic",
          title: '1¢ Token — M. A. Davis (1ct on Reverse), Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-a-davis-1ct-on-reverse-001/";
            },},{id: "tokens-10-token-m-a-davis-port-republic",
          title: '10¢ Token — M. A. Davis, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-a-davis-010/";
            },},{id: "tokens-50-token-m-a-davis-port-republic",
          title: '50¢ Token — M. A. Davis, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-a-davis-050/";
            },},{id: "tokens-25-token-m-a-maupin-port-republic",
          title: '25¢ Token — M. A. Maupin, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-a-maupin-025/";
            },},{id: "tokens-5-token-m-j-meyerhoeffer-port-republic",
          title: '5¢ Token — M. J. Meyerhoeffer, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-j-meyerhoeffer-005/";
            },},{id: "tokens-10-token-m-j-meyerhoeffer-port-republic",
          title: '10¢ Token — M. J. Meyerhoeffer, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-j-meyerhoeffer-010/";
            },},{id: "tokens-25-token-m-j-meyerhoeffer-port-republic",
          title: '25¢ Token — M. J. Meyerhoeffer, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-j-meyerhoeffer-025/";
            },},{id: "tokens-1-token-m-j-meyerhoeffer-port-republic",
          title: '$1 Token — M. J. Meyerhoeffer, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-m-j-meyerhoeffer-100/";
            },},{id: "tokens-1-token-miller-showalter-amp-co-ltd-port-republic",
          title: '1¢ Token — Miller Showalter &amp;amp; Co. Ltd, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-miller-showalter-and-co-ltd-001/";
            },},{id: "tokens-5-token-miller-showalter-amp-co-ltd-port-republic",
          title: '5¢ Token — Miller Showalter &amp;amp; Co. Ltd, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-miller-showalter-and-co-ltd-005/";
            },},{id: "tokens-25-token-miller-showalter-amp-co-ltd-port-republic",
          title: '25¢ Token — Miller Showalter &amp;amp; Co. Ltd, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-miller-showalter-and-co-ltd-025/";
            },},{id: "tokens-1-token-miller-showalter-amp-co-ltd-port-republic",
          title: '$1 Token — Miller Showalter &amp;amp; Co. Ltd, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-miller-showalter-and-co-ltd-100/";
            },},{id: "tokens-1-token-mundy-smith-amp-mundy-port-republic",
          title: '1¢ Token — Mundy Smith &amp;amp; Mundy, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-mundy-smith-and-mundy-001/";
            },},{id: "tokens-25-token-mundy-smith-amp-mundy-port-republic",
          title: '25¢ Token — Mundy Smith &amp;amp; Mundy, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-mundy-smith-and-mundy-025/";
            },},{id: "tokens-50-token-mundy-smith-amp-mundy-port-republic",
          title: '50¢ Token — Mundy Smith &amp;amp; Mundy, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-mundy-smith-and-mundy-050/";
            },},{id: "tokens-1-token-mundy-smith-amp-mundy-port-republic",
          title: '$1 Token — Mundy Smith &amp;amp; Mundy, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-mundy-smith-and-mundy-100/";
            },},{id: "tokens-1-token-r-m-wagner-amp-bro-port-republic",
          title: '1¢ Token — R. M. Wagner &amp;amp; Bro., Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-r-m-wagner-and-bro-001/";
            },},{id: "tokens-1-token-w-c-harper-port-republic",
          title: '1¢ Token — W. C. Harper, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-w-c-harper-001/";
            },},{id: "tokens-5-token-w-c-harper-port-republic",
          title: '5¢ Token — W. C. Harper, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-w-c-harper-005/";
            },},{id: "tokens-10-token-w-c-harper-port-republic",
          title: '10¢ Token — W. C. Harper, Port Republic',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/port-republic-w-c-harper-010/";
            },},{id: "tokens-25-token-w-a-smith-rainbow",
          title: '25¢ Token — W. A. Smith, Rainbow',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rainbow-w-a-smith-025/";
            },},{id: "tokens-1-token-ed-39-s-park-rawley-springs",
          title: '1¢ Token — Ed&amp;#39;s Park, Rawley Springs',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rawley-springs-eds-park-001/";
            },},{id: "tokens-1-token-h-h-heatwole-rockingham-county",
          title: '1¢ Token — H. H. Heatwole, Rockingham County',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rockingham-h-h-heatwole-001/";
            },},{id: "tokens-10-token-h-h-heatwole-rockingham-county",
          title: '10¢ Token — H. H. Heatwole, Rockingham County',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rockingham-h-h-heatwole-010/";
            },},{id: "tokens-25-token-h-h-heatwole-rockingham-county",
          title: '25¢ Token — H. H. Heatwole, Rockingham County',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rockingham-h-h-heatwole-025/";
            },},{id: "tokens-50-token-j-t-rice-amp-co-rushville",
          title: '50¢ Token — J. T. Rice &amp;amp; Co., Rushville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rushville-j-t-rice-and-co-050/";
            },},{id: "tokens-1-token-j-t-rice-amp-co-rushville",
          title: '$1 Token — J. T. Rice &amp;amp; Co., Rushville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/rushville-j-t-rice-and-co-100/";
            },},{id: "tokens-1-token-swank-and-armentrout-singers-glen",
          title: '1¢ Token — Swank and Armentrout, Singers Glen',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/singers-glen-swank-and-armentrout-001/";
            },},{id: "tokens-2-token-swank-and-armentrout-singers-glen",
          title: '2¢ Token — Swank and Armentrout, Singers Glen',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/singers-glen-swank-and-armentrout-002/";
            },},{id: "tokens-10-token-swank-and-armentrout-singers-glen",
          title: '10¢ Token — Swank and Armentrout, Singers Glen',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/singers-glen-swank-and-armentrout-010/";
            },},{id: "tokens-25-token-swank-and-armentrout-singers-glen",
          title: '25¢ Token — Swank and Armentrout, Singers Glen',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/singers-glen-swank-and-armentrout-025/";
            },},{id: "tokens-2-token-swank-and-armentrout-singers-glen",
          title: '$2 Token — Swank and Armentrout, Singers Glen',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/singers-glen-swank-and-armentrout-200/";
            },},{id: "tokens-5-token-swank-and-armentrout-singers-glen",
          title: '$5 Token — Swank and Armentrout, Singers Glen',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/singers-glen-swank-and-armentrout-500/";
            },},{id: "tokens-1-token-bolen-amp-bolen-spring-creek",
          title: '1¢ Token — Bolen &amp;amp; Bolen, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-bolen-and-bolen-001/";
            },},{id: "tokens-5-token-bolen-amp-bolen-spring-creek",
          title: '5¢ Token — Bolen &amp;amp; Bolen, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-bolen-and-bolen-005/";
            },},{id: "tokens-10-token-bolen-amp-bolen-spring-creek",
          title: '10¢ Token — Bolen &amp;amp; Bolen, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-bolen-and-bolen-010/";
            },},{id: "tokens-25-token-bolen-amp-bolen-spring-creek",
          title: '25¢ Token — Bolen &amp;amp; Bolen, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-bolen-and-bolen-025/";
            },},{id: "tokens-50-token-bolen-amp-bolen-spring-creek",
          title: '50¢ Token — Bolen &amp;amp; Bolen, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-bolen-and-bolen-050/";
            },},{id: "tokens-1-token-campbell-amp-pence-spring-creek",
          title: '1¢ Token — Campbell &amp;amp; Pence, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-campbell-and-pence-001/";
            },},{id: "tokens-1-token-campbell-amp-pence-spring-creek",
          title: '$1 Token — Campbell &amp;amp; Pence, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-campbell-and-pence-100/";
            },},{id: "tokens-2-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '2¢ Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-002/";
            },},{id: "tokens-5-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '5¢ Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-005/";
            },},{id: "tokens-10-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '10¢ Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-010/";
            },},{id: "tokens-25-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '25¢ Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-025/";
            },},{id: "tokens-1-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '$1 Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-100/";
            },},{id: "tokens-2-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '$2 Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-200/";
            },},{id: "tokens-5-token-g-w-thomas-amp-co-in-mdse-spring-creek",
          title: '$5 Token — G. W. Thomas &amp;amp; Co. (In Mdse), Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-in-mdse-500/";
            },},{id: "tokens-1-token-g-w-thomas-amp-co-spring-creek",
          title: '1¢ Token — G. W. Thomas &amp;amp; Co., Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-001/";
            },},{id: "tokens-2-token-g-w-thomas-amp-co-spring-creek",
          title: '2¢ Token — G. W. Thomas &amp;amp; Co., Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-002/";
            },},{id: "tokens-5-token-g-w-thomas-amp-co-spring-creek",
          title: '5¢ Token — G. W. Thomas &amp;amp; Co., Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-005/";
            },},{id: "tokens-10-token-g-w-thomas-amp-co-spring-creek",
          title: '10¢ Token — G. W. Thomas &amp;amp; Co., Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-010/";
            },},{id: "tokens-25-token-g-w-thomas-amp-co-spring-creek",
          title: '25¢ Token — G. W. Thomas &amp;amp; Co., Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-025/";
            },},{id: "tokens-50-token-g-w-thomas-amp-co-spring-creek",
          title: '50¢ Token — G. W. Thomas &amp;amp; Co., Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-g-w-thomas-and-co-050/";
            },},{id: "tokens-5-token-l-p-coyner-spring-creek",
          title: '5¢ Token — L. P. Coyner, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-l-p-coyner-005/";
            },},{id: "tokens-10-token-l-p-coyner-spring-creek",
          title: '10¢ Token — L. P. Coyner, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-l-p-coyner-010/";
            },},{id: "tokens-50-token-l-p-coyner-spring-creek",
          title: '50¢ Token — L. P. Coyner, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-l-p-coyner-050/";
            },},{id: "tokens-1-token-l-p-coyner-spring-creek",
          title: '$1 Token — L. P. Coyner, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-l-p-coyner-100/";
            },},{id: "tokens-5-token-n-a-spitler-spring-creek",
          title: '5¢ Token — N. A. Spitler, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-n-a-spitler-005/";
            },},{id: "tokens-10-token-n-a-spitler-spring-creek",
          title: '10¢ Token — N. A. Spitler, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-n-a-spitler-010/";
            },},{id: "tokens-25-token-n-a-spitler-spring-creek",
          title: '25¢ Token — N. A. Spitler, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-n-a-spitler-025/";
            },},{id: "tokens-50-token-n-a-spitler-spring-creek",
          title: '50¢ Token — N. A. Spitler, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-n-a-spitler-050/";
            },},{id: "tokens-1-token-n-a-spitler-spring-creek",
          title: '$1 Token — N. A. Spitler, Spring Creek',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-n-a-spitler-100/";
            },},{id: "tokens-1-token-n-o-thacker-bolen-amp-bolen-spring-creek-n-o-t",
          title: '1¢ Token — N.O.Thacker / Bolen &amp;amp; Bolen, Spring Creek (N.O.T.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-not-nothacker-and-bolen-and-bolen-001/";
            },},{id: "tokens-5-token-n-o-thacker-bolen-amp-bolen-spring-creek-n-o-t",
          title: '5¢ Token — N.O.Thacker / Bolen &amp;amp; Bolen, Spring Creek (N.O.T.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-not-nothacker-and-bolen-and-bolen-005/";
            },},{id: "tokens-10-token-n-o-thacker-bolen-amp-bolen-spring-creek-n-o-t",
          title: '10¢ Token — N.O.Thacker / Bolen &amp;amp; Bolen, Spring Creek (N.O.T.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-not-nothacker-and-bolen-and-bolen-010/";
            },},{id: "tokens-25-token-n-o-thacker-bolen-amp-bolen-spring-creek-n-o-t",
          title: '25¢ Token — N.O.Thacker / Bolen &amp;amp; Bolen, Spring Creek (N.O.T.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-not-nothacker-and-bolen-and-bolen-025/";
            },},{id: "tokens-50-token-n-o-thacker-bolen-amp-bolen-spring-creek-n-o-t",
          title: '50¢ Token — N.O.Thacker / Bolen &amp;amp; Bolen, Spring Creek (N.O.T.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-not-nothacker-and-bolen-and-bolen-050/";
            },},{id: "tokens-1-token-n-o-thacker-bolen-amp-bolen-spring-creek-n-o-t",
          title: '$1 Token — N.O.Thacker / Bolen &amp;amp; Bolen, Spring Creek (N.O.T.)',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/spring-creek-not-nothacker-and-bolen-and-bolen-100/";
            },},{id: "tokens-1-token-kate-crider-swift-run",
          title: '1¢ Token — Kate Crider, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-kate-crider-001/";
            },},{id: "tokens-50-token-kate-crider-swift-run",
          title: '50¢ Token — Kate Crider, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-kate-crider-050/";
            },},{id: "tokens-5-token-w-h-shifflett-swift-run",
          title: '5¢ Token — W. H. Shifflett, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-w-h-shifflett-005/";
            },},{id: "tokens-10-token-w-h-shifflett-swift-run",
          title: '10¢ Token — W. H. Shifflett, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-w-h-shifflett-010/";
            },},{id: "tokens-25-token-w-h-shifflett-swift-run",
          title: '25¢ Token — W. H. Shifflett, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-w-h-shifflett-025/";
            },},{id: "tokens-50-token-w-h-shifflett-swift-run",
          title: '50¢ Token — W. H. Shifflett, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-w-h-shifflett-050/";
            },},{id: "tokens-1-token-w-h-shifflett-swift-run",
          title: '$1 Token — W. H. Shifflett, Swift Run',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/swift-run-w-h-shifflett-100/";
            },},{id: "tokens-1-token-joseph-smith-amp-bro-tenth-legion",
          title: '1¢ Token — Joseph Smith &amp;amp; Bro., Tenth Legion',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tenth-legion-joseph-smith-and-bro-001/";
            },},{id: "tokens-5-token-joseph-smith-amp-bro-tenth-legion",
          title: '5¢ Token — Joseph Smith &amp;amp; Bro., Tenth Legion',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tenth-legion-joseph-smith-and-bro-005/";
            },},{id: "tokens-10-token-joseph-smith-amp-bro-tenth-legion",
          title: '10¢ Token — Joseph Smith &amp;amp; Bro., Tenth Legion',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tenth-legion-joseph-smith-and-bro-010/";
            },},{id: "tokens-25-token-joseph-smith-amp-bro-tenth-legion",
          title: '25¢ Token — Joseph Smith &amp;amp; Bro., Tenth Legion',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tenth-legion-joseph-smith-and-bro-025/";
            },},{id: "tokens-1-token-joseph-smith-amp-bro-tenth-legion",
          title: '$1 Token — Joseph Smith &amp;amp; Bro., Tenth Legion',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tenth-legion-joseph-smith-and-bro-100/";
            },},{id: "tokens-1-token-c-d-meyerhoeffer-timber-ridge",
          title: '1¢ Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-001/";
            },},{id: "tokens-5-token-c-d-meyerhoeffer-timber-ridge",
          title: '5¢ Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-005/";
            },},{id: "tokens-10-token-c-d-meyerhoeffer-timber-ridge",
          title: '10¢ Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-010/";
            },},{id: "tokens-25-token-c-d-meyerhoeffer-timber-ridge",
          title: '25¢ Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-025/";
            },},{id: "tokens-50-token-c-d-meyerhoeffer-timber-ridge",
          title: '50¢ Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-050/";
            },},{id: "tokens-1-token-c-d-meyerhoeffer-timber-ridge",
          title: '$1 Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-100/";
            },},{id: "tokens-5-token-c-d-meyerhoeffer-timber-ridge",
          title: '$5 Token — C. D. Meyerhoeffer, Timber Ridge',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timber-ridge-c-d-meyerhoeffer-500/";
            },},{id: "tokens-1-token-d-s-wampler-timberville",
          title: '1¢ Token — D. S. Wampler, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-d-s-wampler-001/";
            },},{id: "tokens-5-token-d-s-wampler-timberville",
          title: '5¢ Token — D. S. Wampler, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-d-s-wampler-005/";
            },},{id: "tokens-10-token-d-s-wampler-timberville",
          title: '10¢ Token — D. S. Wampler, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-d-s-wampler-010/";
            },},{id: "tokens-25-token-d-s-wampler-timberville",
          title: '25¢ Token — D. S. Wampler, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-d-s-wampler-025/";
            },},{id: "tokens-50-token-d-s-wampler-timberville",
          title: '50¢ Token — D. S. Wampler, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-d-s-wampler-050/";
            },},{id: "tokens-1-token-d-s-wampler-timberville",
          title: '$1 Token — D. S. Wampler, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-d-s-wampler-100/";
            },},{id: "tokens-5-token-dr-w-a-vaughan-timberville",
          title: '5¢ Token — Dr. W. A. Vaughan, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-dr-w-a-vaughan-005/";
            },},{id: "tokens-1-token-farmers-amp-merchants-bank-timberville",
          title: '1¢ Token — Farmers &amp;amp; Merchants Bank, Timberville',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/timberville-farmers-and-merchants-bank-001/";
            },},{id: "tokens-1-token-j-h-custer-1-ct-in-trade-tunis",
          title: '1¢ Token — J. H. Custer (1 ct. in trade), Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-1-ct-in-trade-001/";
            },},{id: "tokens-10-token-j-h-custer-10-ct-in-trade-tunis",
          title: '10¢ Token — J. H. Custer (10 ct. in trade), Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-10-ct-in-trade-010/";
            },},{id: "tokens-5-token-j-h-custer-5-ct-in-trade-tunis",
          title: '5¢ Token — J. H. Custer (5 ct. in trade), Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-5-ct-in-trade-005/";
            },},{id: "tokens-1-token-j-h-custer-tunis",
          title: '1¢ Token — J. H. Custer, Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-001/";
            },},{id: "tokens-5-token-j-h-custer-tunis",
          title: '5¢ Token — J. H. Custer, Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-005/";
            },},{id: "tokens-10-token-j-h-custer-tunis",
          title: '10¢ Token — J. H. Custer, Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-010/";
            },},{id: "tokens-25-token-j-h-custer-tunis",
          title: '25¢ Token — J. H. Custer, Tunis',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/tunis-j-h-custer-025/";
            },},{id: "tokens-1-token-c-e-long-zenda",
          title: '1¢ Token — C. E. Long, Zenda',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/zenda-c-e-long-001/";
            },},{id: "tokens-5-token-c-e-long-zenda",
          title: '5¢ Token — C. E. Long, Zenda',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/zenda-c-e-long-005/";
            },},{id: "tokens-10-token-c-e-long-zenda",
          title: '10¢ Token — C. E. Long, Zenda',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/zenda-c-e-long-010/";
            },},{id: "tokens-25-token-c-e-long-zenda",
          title: '25¢ Token — C. E. Long, Zenda',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/zenda-c-e-long-025/";
            },},{id: "tokens-50-token-c-e-long-zenda",
          title: '50¢ Token — C. E. Long, Zenda',
          description: "",
          section: "Tokens",handler: () => {
              window.location.href = "/messerley-collection/tokens/zenda-c-e-long-050/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
