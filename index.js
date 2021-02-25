const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const server = app.listen(port, () => { 

    app.use(express.static('public'))

    app.get('/', (req, res) => {
    res.sendFile('index.html')
    })

    app.get('/api/locations', (req, res) => {

        let database = [
            { id: 1, latitude: 60, longitude: 70 },
            { id: 2, latitude: 40, longitude: 80 },
        ];

        if(req.query.pretty === "1"){
            res.setHeader('Content-Type', 'application/json');
            let pretty_db = JSON.stringify(database, null, 3);
            res.end(pretty_db)
        }
        else{
            res.json(database)
        }
    })
})