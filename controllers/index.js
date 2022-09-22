const path = require('path');

exports.getInfo = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'info.html'))
}

exports.postTriangle = (req, res) => {
    isRec="negativo"
    a1 = req.body.a1
    a2 = req.body.a2
    a3 = req.body.a3

    if (a1 == 90 || a2==90 || a3==90) isRec = "positivo"
    if ((a1 + a2 + a3) != 180) isRec = "Triangulo no valido"
    res.send({"trianguloRect": isRec})
}

