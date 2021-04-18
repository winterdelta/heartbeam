import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import styles from "../styles/donate.module.css";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_live_UGsADS70zJbFuB5coQoJZmdi00Hmigt5sY");

export default function Donate() {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1IL8UyGLp1omzQ8PBjenvV56", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://winterdelta.com",
      cancelUrl: "https://winterdelta.com",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button className={styles.button} role="link" onClick={handleClick}>
      R&D FUND
    </button>
  );
}
