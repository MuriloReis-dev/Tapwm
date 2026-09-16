let app = require('./app/config/server');

let rotaHome = require('./app/routes/home');
rotaHome(app);

let rotaContato = require('./app/routes/contato');
rotaContato(app);

let rotaInscricao = require('./app/routes/inscricao');
rotaInscricao(app);

let rotaProgramacao = require('./app/routes/programacao');
rotaProgramacao(app);

let rotaSobre = require('./app/routes/sobre');
rotaSobre(app);

let rotaNovidades = require('./app/routes/novidades');
rotaNovidades(app);

let rotaProfessores = require('./app/routes/professores')
rotaProfessores(app)

app.listen(3000, function() {
    console.log("servidor iniciado");
});
