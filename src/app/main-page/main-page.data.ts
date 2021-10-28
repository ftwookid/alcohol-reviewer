export interface ProductItemModel {
  name: string;
  imageLink: string;
  rating?: number;
  fullName: string;
  size: number;
  description: string;
  age: number;
  country: string;
  casc: string;
  strength: number;
  aroma: {
    ivan: number;
    nikolay: number;
  };
  taste: {
    ivan: number;
    nikolay: number;
  };
  scalding: {
    ivan: number;
    nikolay: number;
  };
}

export const products: ProductItemModel[] = [
  {
    name: 'West cork',
    imageLink: '/assets/img/west-cork-bourbon-cask.jpg',
    rating: 4.1,
    fullName: 'West Cork Blended Irish Whiskey',
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
];
