var express = require('express');
var paypal = require('paypal-rest-sdk');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var session = req.session;
    var tongtien = 0;
    if(session.cart)
    {
        tongtien = session.cart.totalPrice;
    }
    var payment = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "/execute",
            "cancel_url": "/cancel"
        },
        "transactions": [{
            "amount": {
                "total": tongtien,
                "currency": "USD"
            },
            "description": "Payment for order number: 78123"
        }]
    };

    paypal.payment.create(payment, function(error, payment) {
        if (error) {
            console.log(error);
        } else {
            if (payment.payer.payment_method === 'paypal') {
                req.session.paymentId = payment.id;

                var redirectUrl;
                for (var i = 0; i < payment.links.length; i++) {
                    var link = payment.links[i];
                    if (link.method === 'REDIRECT') {
                        redirectUrl = link.href;
                    }
                }
                res.redirect(redirectUrl);
            }
        }
    });
});

module.exports = router;