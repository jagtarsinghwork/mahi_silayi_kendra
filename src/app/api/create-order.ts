import Razorpay from 'razorpay';

const razorpayInstance = new Razorpay({
  key_id: 'YOUR_KEY_ID', // Replace with your Razorpay key_id
  key_secret: 'YOUR_KEY_SECRET', // Replace with your Razorpay key_secret
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency, receipt, notes } = req.body;

    const options = {
      amount: amount * 100, // Convert to paise
      currency: currency,
      receipt: receipt,
      notes: notes,
    };

    try {
      const order = await razorpayInstance.orders.create(options);
      res.status(200).json(order);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to create order');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
