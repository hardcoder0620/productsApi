const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('my first express app - hardcoder0620'))








const start = async ()=>{
    try {

        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
        
    } catch (error) {
        console.log('error on start function',error)
        
    }
}
start()