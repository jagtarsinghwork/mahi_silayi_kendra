"use client";
import { useState } from "react";

const PaymentForm = () => {
  const [amount, setAmount] = useState("5");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  // Handle amount input
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // Trigger Razorpay Payment
  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Create order by calling the server endpoint
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {},
      }),
    });

    const order = await response.json();

    if (order && order.id) {
      const options = {
        key: "YOUR_KEY_ID", // Replace with your Razorpay key_id
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        order_id: order.id, // Use the order_id from the backend
        callback_url: "/payment-success", // Your success URL
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } else {
      alert("Error creating payment order");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Razorpay Payment Gateway
        </h1>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-gray-700 font-semibold mb-2"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handlePayment}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>

        {isPaymentSuccessful && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            Payment Successful!
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
