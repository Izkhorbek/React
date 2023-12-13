export default interface orderModel {
  pickupName: string;
  pickupPhoneNumber: string;
  pickupEmail: string;
  applicationUserId: string;
  orderTotal: number;
  stripePaymentIntentID: string;
  status: string;
  totalItems: number;
  orderDetailsDTO: [
    {
      menuItemId: number;
      quantity: number;
      itemName: string;
      price: number;
    }
  ];
}
