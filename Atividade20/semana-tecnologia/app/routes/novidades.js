module.exports = function(app) {
    app.get('/evento/novidades', function(req, res) {
        res.send("<h1>Novidades relacionadas à Semana da Tecnologia:</h1><ul><li>A Semana da Tecnologia será realizada durante a semana</li><li>Ela terá tecnologia</li><li>Esse é o melhor site da história</li></ul>");
    });
}