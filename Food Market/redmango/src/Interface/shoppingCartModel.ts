import cardItemModel from "./cardItemModel";

export default interface shoppingCartModel {
  id: number;
  userId: string;
  cartItems: cardItemModel[];
  cartTotal: number;
  stripePaymentIntentId?: any;
  clientSecret?: any;
}
