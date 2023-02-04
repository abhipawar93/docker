
const express = require('express');

const app = express();

app.get('/', (req,res) => {

    res.send('Hi new  There,Abhi here');

});

app.listen(8080, () => {

    console.log('listning on 8080');
});
