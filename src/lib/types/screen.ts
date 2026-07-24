// /**  REACT APP STATE*/  1-screen copm based type integration

import { Member } from "./member";
import { Product } from "./product";

// 2-target orented type integration
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/**HOMEPAGE */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
/**PRODUCTS PAGE */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}
/**ORDERS PAGE */
