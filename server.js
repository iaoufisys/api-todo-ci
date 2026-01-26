const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 API TODO démarrée sur le port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
    console.log(`💚 Environnement: ${process.env.NODE_ENV || 'development'}`);
});
