export interface ProductItemModel {
  name: string;
  imageLink: string;
  rating: number;
}

export const products: ProductItemModel[] = [
  {
    name: 'West cork',
    imageLink: '/assets/img/west-cork-bourbon-cask.jpg',
    rating: 4.1,
  },
  {
    name: 'Pomoi ebanie',
    imageLink: '/assets/img/ballantines.png',
    rating: 0,
  },
];
