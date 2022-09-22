const path = require('path');

exports.getInfo = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'info.html'))
}

exports.postTriangle = (req, res) => {
    console.log(req.body.a1)
    isRec="negativo"
    if (req.body.a1 == 90 || req.body.a2==9 || req.body.a3==9) isRec = "positivo"
    res.send({"trianguloRect": isRec})
}

