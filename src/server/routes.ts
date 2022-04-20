import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const router = express.Router();

// Simulate DB with array 
let purchases:any[] = [];


router.post('/purchase', (req, res, next) => {
    const cartItem = req.body;

    console.log(cartItem);
    purchases.push(cartItem);
    console.log(purchases);
    
    res.send("Thank you for your purchase!. Please press back to go to previous page");
})

router.get('/purchases', (req, res) => {
    res.json(purchases);
})

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

export default router;