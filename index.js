const fs = require('fs');

setInterval(() => {
    fs.appendFile("time.txt", Date.now() + "\r\n", (error) => {
        console.log("Erreur lors de l'écriture du timestamp : " + error);
    });
}, 1000);
