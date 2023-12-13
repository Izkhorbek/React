import { shoppingCartModel } from "../../../../Interface";
import { SD_Status } from "../../../../Utility/SD";

export interface OrderSummaryProps {
  data: {
    id?: number;
    cartItems?: shoppingCartModel[];
    cartTotal?: number;
    userId?: string;
    clientSecret?: string;
    stripePaymentIntentId?: string;
    status?: SD_Status;
  };
  userInput: {
    name?: string;
    email?: string;
    phoneNumber?: string;
  };
}
