import { Shop } from 'services/index';

export interface ShopCartType {
  id: number;
  productName: string;
  shop: Shop;
}
