const express = require('express');
const cors = require('cors');
const {bibliobuddyDBConnection} = require('../database/connectionBibliobuddy');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.principalPath = "/api/v1"
        this.corsOptions = {
            origin: "",
            optionsSuccessStatus: 200
        }

        this.connectPosgresSQLBiblioBuddyDB();

        this.middlewares();

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors(this.corsOptions));

        // Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static("public"));

        // FileUpload Carga de archivos
        // this.app.use(
        //     fileUpload({
        //         useTempFiles: true,
        //         tempFileDir: "/tmp/",
        //     })
        // );
    }

    routes() {
        this.app.use(this.principalPath, require("../routes/index.routes"));
    }

    async connectPosgresSQLBiblioBuddyDB() {
        try {
            await bibliobuddyDBConnection();
        } catch (error) {
            throw new Error(error);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listening port:", this.port);
        });
    }
}

module.exports = Server;
