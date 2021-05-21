const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51ILHRSDLE7H50kV7o14emfUP1Rf5MTnRUI0CFGteKKv7kcYj15BGUmQys5ARdJ4TQBhWyrr55zi4pJoFcTtA06Mf00qOHAzZid')

// <<--App config-->>
const app = express();

// <<--MiddleWare-->>
app.use(cors({origin: true}));
app.use(express.json());

// <<--API routes-->>
app.get('/', (request, response) => response.status(200).send("HELLO WORLD"))

app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    console.log('PAYMENT request Rcieved BOOM!! amount =', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// <<--Listen-->>
exports.api = functions.https.onRequest(app)

// Example ENDPOINT
// http://localhost:5001/clone-a12/us-central1/api