// server.js

import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51R06cSRdNT4fgN5Uoy9MVqPbv1DDVsDmB49M0irE0cmHxKVAGdKMGniV4SEA9OYbIzh9N9vSaT6NJkGR2UORiKrU00gQyMIjvZ'); // Ваш секретный ключ Stripe
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // Сумма в копейках (например, 5000 — это 50 рублей)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'rub', // Указываем валюту, в которой производится оплата
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Ошибка создания платежа:', error);
    res.status(500).send({ error: 'Ошибка создания платежа' });
  }
});

app.listen(3230, () => {
  console.log('Сервер запущен на порту 3230');
});
