const functions = require('firebase-functions');
const express = require("express")
// middleware
const cors = require("cors")
const stripe = require("stripe")

    ('sk_test_51HkyuSBH105OqfN2DZD1kS3Yq3GeyHiGHzbCX1Ao8WcgsUXtJW6CltNK4CwF3bXyQyIIWrOZyDRNwCZO7O9QHAuL00WMQvn6wg')

// api

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received! >>> ', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits
        currency: "usd",
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command
exports.api = functions.https.onRequest(app);

// endpoint
// http://localhost:5003/breaking-bread-36df4/us-central1/api