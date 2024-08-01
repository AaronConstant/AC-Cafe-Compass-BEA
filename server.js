const app = require('./app')
require('dontenv').config()

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Listening to PORT: ${PORT}`);
})