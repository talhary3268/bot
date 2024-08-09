const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(express.static('./public'))
require('./lib/telegram')
function generateRandomId() {
    const timestamp = Date.now(); // Current timestamp in milliseconds
    const randomPart = Array.from({ length: 19 }, () => Math.floor(Math.random() * 10)).join(''); // 19 random digits
    return `${timestamp}-${randomPart}`;
}

app.get('/key/:id', (req, res) => {
    res.json({ id: generateRandomId() })
})
app.listen(port ,()=>{
    console.log('server running')
})