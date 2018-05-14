const fs = require('fs');

setInterval(() => {
    fs.appendFile("time.txt", Date.now() + "\r\n", (error) => {
        if(error) return console.log("Erreur lors de l'écriture du timestamp : " + error);
    });
}, 1000);
