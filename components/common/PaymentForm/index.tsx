'use client';
import React, { useState } from 'react';
import Razorpay from 'razorpay'; // Install this package

const PaymentForm = () => {
  const [amount, setAmount] = useState('5');
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePayment = async () => {
    if (!amount || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Number(amount) * 100, // Amount in paise
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {},
        }),
      });

      const order = await response.json();

      if (!order || !order.id) {
        throw new Error('Error creating payment order');
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'YOUR_KEY_ID', // Use env variable
        amount: Number(amount) * 100,
        currency: 'INR',
        name: 'TestFire',
        description: 'Test Transaction',
        order_id: order.id,
        callback_url: '/payment-success', // Update with your route
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
        handler: (response: any) => {
          setIsPaymentSuccessful(true);
          console.log(response);
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">TestFire Payment</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
              Amount (INR):
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              min="1"
            />
          </div>
          <button
            type="button"
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        {isPaymentSuccessful && (
          <p className="mt-4 text-green-600 text-center font-semibold">Payment Successful!</p>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;