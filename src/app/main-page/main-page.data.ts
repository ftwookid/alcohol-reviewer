export interface ProductItemModel {
  name: string;
  imageLink: string;
  rating: number;
  fullName: string;
  size: number;
  description: string;
  age: number;
  country: string;
  casc: string;
  strength: number;
  aroma: {
    ivan?: number;
    nikolay?: number;
  };
  taste: {
    ivan?: number;
    nikolay?: number;
  };
  scalding: {
    ivan?: number;
    nikolay?: number;
  };
}

// export const getRating = (item: ProductItemModel): number => {
//   return item.aroma.ivan * 4;
// };

// export class MyProduct implements ProductItemModel {
//   public name: string;
//   public imageLink: string;
//   public fullName: string;
//   public size: number;
//   public description: string;
//   public age: number;
//   public country: string;
//   public casc: string;
//   public strength: number;
//   public aroma: {};
//   public taste: {};
//   public scalding: {};
//   getRating(item: ProductItemModel) {
//     item.aroma.ivan * 3;
//   }
// }

export const products: ProductItemModel[] = [
  {
    name: 'West cork',
    imageLink: '/assets/img/west-cork-bourbon-cask.jpg',
    fullName: 'West Cork Blended Irish Whiskey',
    rating: 4,
    size: 0.7,
    description:
      'A delicate blend of grain (75%) and malt (25%) whiskey matured in bourbon casks, with a slight citrus and cracked pepper aroma. A smooth and balanced whiskey, the taste is one of malt, lingering sweetness, citrus, apple and nutmeg.',
    age: 3,
    country: 'Ireland',
    casc: 'Bourbon',
    strength: 40,
    aroma: {
      ivan: 4.5,
      nikolay: 4.6,
    },
    taste: {
      ivan: 4.4,
      nikolay: 4.5,
    },
    scalding: {
      ivan: 4.8,
      nikolay: 4.8,
    },
  },
  {
    name: 'Tomatin Legacy',
    imageLink: '/assets/img/TomatinLegacy.png',
    rating: 4.6,
    fullName: 'Tomatin Legacy. Highland single malt scotch whisky',
    size: 0.7,
    description:
      'Time in Bourbon barrels and Virgin Oak casks brings a light sweetness to The Tomatin Legacy, which boasts aromas of vanilla bean, white chocolate and cinnamon. On the palate gentle waves of fresh fruit peppered with ginger emerge ahead of a light, clean finish.',
    age: 8,
    country: 'Scotland',
    casc: 'Bourbon barrels and Virgin Oak casks',
    strength: 43,
    aroma: {
      ivan: 4.7,
      nikolay: 4.7,
    },
    taste: {
      ivan: 4.8,
      nikolay: 4.6,
    },
    scalding: {
      ivan: 4.9,
      nikolay: 4.9,
    },
  },
  {
    name: 'Old Virginia',
    imageLink: '/assets/img/OldVirginia.png',
    rating: 3.8,
    fullName: 'Old Virginia. Kentucky straight bourbon whiskey',
    size: 0.7,
    description:
      'It is characterized by spicy vanilla and caramel notes and a backbone of wood. Produced and matured for 6 years in the state of Kentucky in the United States, OLD VIRGINIA is an authentic straight Bourbon Whiskey that combines sweetness and body.',
    age: 6,
    country: 'USA',
    casc: 'Oak casks',
    strength: 40,
    aroma: {
      ivan: 4.7,
      nikolay: 4.7,
    },
    taste: {
      ivan: 4.8,
      nikolay: 4.6,
    },
    scalding: {
      ivan: 4.9,
      nikolay: 4.9,
    },
  },
  {
    name: 'Pomoi ebanie',
    imageLink: '/assets/img/ballantines.png',
    rating: 0,
    fullName: "Ballantine's Finest blended scotch whisky",
    size: 0.7,
    description: 'Taste of shit on a bottle',
    age: 3,
    country: 'Scotland',
    casc: 'Finish',
    strength: 40,
    aroma: {
      ivan: 1,
      nikolay: 1,
    },
    taste: {
      ivan: 1,
      nikolay: 1,
    },
    scalding: {
      ivan: 1,
      nikolay: 1,
    },
  },
  {
    name: 'Oakheart',
    imageLink:
      'https://cdn.shopify.com/s/files/1/0076/0021/0033/products/600388_1_4be597dd-529b-4d22-8296-1c389bfac867.png?v=1579603956',
    rating: 5,
    fullName: 'Bacardi Oakheart Original Spiced',
    size: 1,
    description:
      'Bacardi Oakheart is a spiced rum-based spirit and is so-called because some of the rums are matured in ex-bourbon oak casks. Notes of brown sugar, honey and burnt vanilla custard with a short, lightly cinnamony finish.',
    age: 1,
    country: 'USA',
    casc: 'American Oak',
    strength: 35,
    aroma: {
      ivan: 5,
    },
    taste: {
      ivan: 4.4,
    },
    scalding: {
      ivan: 3.2,
    },
  },
  {
    name: 'Red Label',
    imageLink:
      'https://cdn.shopify.com/s/files/1/0076/0021/0033/products/801460_a2a39673-35d3-4ac5-ae76-3e23dc658ea5.png?v=1579603564',
    rating: 4,
    fullName: 'Johnnie Walker Red Label. Blended scotch whisky',
    size: 0.7,
    description:
      'Experience the spiciness and freshness of elegant Spaceside and Highland malts in the aroma of our classic Johnnie Walker Red Label. An exotic combination of spicy cinnamon and fresh black pepper that explodes on your tongue. All flavors combine into a long final note with a hint of smoke - the signature note of all Johnnie Walker blends.',
    age: 4,
    country: 'Scotland',
    casc: 'Oak casks',
    strength: 40,
    aroma: {
      ivan: 4,
    },
    taste: {
      ivan: 4,
    },
    scalding: {
      ivan: 4.6,
    },
  },
  {
    name: 'Jameson',
    imageLink:
      'https://winewine.com.ua/wp-content/uploads/2020/04/jameson-07.png',
    rating: 4.4,
    fullName: 'Jameson Irish Whiskey',
    size: 1,
    description:
      'Jameson Irish Whiskey is made by blending rich pot still whiskey made from both malted and unmalted barley, with the finest grain whiskey, both distilled 3 times for smoothness. And while our barley is all grown locally in Ireland, our water comes from the Dungourney river, which flows right through our distillery.',
    age: 6,
    country: 'Ireland',
    casc: 'Oak casks',
    strength: 40,
    aroma: {
      ivan: 4,
    },
    taste: {
      ivan: 4.4,
    },
    scalding: {
      ivan: 3.8,
    },
  },
  {
    name: 'Lauders',
    imageLink:
      'https://lh3.googleusercontent.com/proxy/9qVMg2Z6aBB8HMdxlxi9Ek2vFfXlawAQFIqI8qJiVln9qYtJWDBcryPv6PU2jKomlqPxSMtgJ_DoCnj0-4MqKNSSvtU98TwwpUVzZ4Fhb4k1Ib-D',
    rating: 3.6,
    fullName: 'Lauders. Finest Blended Scotch Whisky',
    size: 1,
    description:
      'Originally created to meet the Glaswegian “Sweet-Tooth” of the clientele who frequented the public houses he owned. Blended from the finest Highland, Lowland and Speyside malts, matured in bourbon oak casks to create a light, yet fruity and full-bodied Scotch which has been in continuous production since 1834.',
    age: 4,
    country: 'Scotland',
    casc: 'Bourbon casks',
    strength: 40,
    aroma: {
      ivan: 3.9,
    },
    taste: {
      ivan: 2.6,
    },
    scalding: {
      ivan: 4.7,
    },
  },
];
