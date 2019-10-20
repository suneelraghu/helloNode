const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => res.send('This is Second statement'))

app.listen(port, () => console.log(`This is Version 2.0  ${port}!`))
