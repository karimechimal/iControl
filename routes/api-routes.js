var db = require("../models");
var fs = require("fs");
var path = require("path");

module.exports = function(app) {

    app.post("/api/user", function(req, res) {
        db.user.create({

            name: req.body.name,
            email: req.body.email,
            telephone: req.body.tel,
            details: req.body.details

        }).then(function(results) {

            var newuserId = results.dataValues.id;
            // console.log(newuserId);
            // console.log(req.body.orders);

            var r = 1;
            var ordenfoto = [];

            for (i = 0; i < req.body.orders; i++) {

                var base64Data = req.body.img[i].replace(/^data:image\/jpeg;base64,/, "");


                require("fs").writeFile("Orders/c" + newuserId + "o" + r + ".jpeg", base64Data, 'base64', function(err) {
                    console.log(err);
                });

                ordenfoto[i] = path.format({
                                // dir: 'C:\\Users\\User\\Desktop\\UNILAR APP\\Orders',
                                base: "\\c" + newuserId + "o" + r + ".jpeg"
                            });

                r = r + 1;
            }

            console.log(ordenfoto);

            for (i = 0; i < req.body.orders; i++) {

                db.orderinfo.create({
                    img: ordenfoto[i],
                    cantidad: req.body.cantidad[i],
                    color: req.body.color[i],
                    talla: req.body.talla[i],
                    marca: req.body.marca,
                    tipo: req.body.tipo[i],
                    precio: req.body.precio[i],
                    status: req.body.status,
                    userId: newuserId

                });

                db.logo.create({
                    logo: ordenfoto[i],
                    url: req.body.cantidad[i],
                    userId: newuserId

                });

            }

            res.json(results);

        });


    });

};