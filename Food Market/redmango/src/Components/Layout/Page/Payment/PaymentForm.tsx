import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import { useState } from "react";
import { OrderSummaryProps } from "../Order/OrderSummaryProps";
import { apiResponse, cardItemModel } from "../../../../Interface";
import { useCreateOrderMutation } from "../../../../Apis/orderApi";
import { SD_Status } from "../../../../Utility/SD";
import { MiniLoader } from "../Common";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ data, userInput }: OrderSummaryProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [createOrder] = useCreateOrderMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
      redirect: "if_required",
    });

    if (result.error) {
      setIsProcessing(false);
    } else {
      const orderDetailsDTO: any = [];
      let totalItems = 0;

      data.cartItems?.forEach((item: cardItemModel, index: number) => {
        const temporaryDetail: any = {};
        temporaryDetail["menuItemId"] = item.menuItem?.id;
        temporaryDetail["itemName"] = item.menuItem?.name;
        temporaryDetail["quantity"] = item.quantity;
        temporaryDetail["price"] = item.menuItem?.price;

        orderDetailsDTO.push(temporaryDetail);
        totalItems += item.quantity!;
      });

      const response: apiResponse = await createOrder({
        pickupName: userInput.name,
        pickupPhoneNumber: userInput.phoneNumber,
        pickupEmail: userInput.email,
        applicationUserId: data.userId,
        orderTotal: data.cartTotal,
        stripePaymentIntentID: data.stripePaymentIntentId,
        status:
          result.paymentIntent.status === "succeeded"
            ? SD_Status.CONFIRMED
            : SD_Status.PENDING,
        totalItems: totalItems,
        orderDetailsDTO: orderDetailsDTO,
      });

      if (response) {
        if (response.data?.result.status === SD_Status.CONFIRMED) {
          navigate(
            `/order/orderConfirmed/${response.data?.result.orderHeaderId}`
          );
        }
      } else {
        navigate("/failed");
      }
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <PaymentElement />
      <button
        disabled={!stripe || isProcessing}
        className="btn btn-success w-100 mt-3"
      >
        {isProcessing ? "Processing" : "Submit"}
      </button>
    </form>
  );
};

export default PaymentForm;
