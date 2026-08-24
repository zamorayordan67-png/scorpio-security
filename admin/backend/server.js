const express = require("express");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
    session({
        secret: "ZARATE_SECURITY_2026",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 60 * 60 * 1000
        }
    })
);


// ================================
// USUARIO ADMINISTRADOR
// ================================

const usuarioAdmin = "admin";

const passwordHash = bcrypt.hashSync("1234", 10);


// ================================
// RUTA PRINCIPAL
// ================================

app.get("/", (req, res) => {

    res.json({
        empresa: "Zarate Security",
        estado: "Backend funcionando correctamente",
        servidor: "Node.js + Express"
    });

});


// ================================
// LOGIN
// ================================

app.post("/api/login", async (req, res) => {

    const { usuario, password } = req.body;

    if (!usuario || !password) {

        return res.status(400).json({
            ok: false,
            mensaje: "Usuario y contraseña son obligatorios."
        });

    }

    if (usuario !== usuarioAdmin) {

        return res.status(401).json({
            ok: false,
            mensaje: "Usuario o contraseña incorrectos."
        });

    }

    const passwordCorrecta = await bcrypt.compare(
        password,
        passwordHash
    );

    if (!passwordCorrecta) {

        return res.status(401).json({
            ok: false,
            mensaje: "Usuario o contraseña incorrectos."
        });

    }

    req.session.usuario = usuario;

    res.json({
        ok: true,
        mensaje: "Inicio de sesión correcto.",
        usuario: usuario
    });

});


// ================================
// COMPROBAR SESIÓN
// ================================

app.get("/api/sesion", (req, res) => {

    if (!req.session.usuario) {

        return res.status(401).json({
            autenticado: false
        });

    }

    res.json({
        autenticado: true,
        usuario: req.session.usuario
    });

});


// ================================
// CERRAR SESIÓN
// ================================

app.post("/api/logout", (req, res) => {

    req.session.destroy((error) => {

        if (error) {

            return res.status(500).json({
                ok: false,
                mensaje: "No se pudo cerrar la sesión."
            });

        }

        res.json({
            ok: true,
            mensaje: "Sesión cerrada correctamente."
        });

    });

});


// ================================
// INICIAR SERVIDOR
// ================================

app.listen(PORT, () => {

    console.log("----------------------------------------");
    console.log("🛡️ ZARATE SECURITY");
    console.log("🚀 Backend iniciado correctamente");
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("----------------------------------------");

});