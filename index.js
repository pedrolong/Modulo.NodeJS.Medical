var http = require('http');
var planos = require('./TelaPlanos');
var login = require('./TelaLogin');
var cadastro = require ('./TelaCadastro');
var home = require ('./TelaHome');
var medico = require ('./TelaMedico');
var paciente = require ('./TelaPaciente');

http.createServer(function (req,res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("Tela planos"+planos.TelaPlanos()+ "<br>");
res.write("Tela login"+login.TelaLogin()+ "<br>");
res.write("Tela cadastro"+cadastro.TelaCadastro()+ "<br>");
res.write("Tela home"+home.TelaHome()+ "<br>");
res.write("Tela medico"+medico.TelaMedico()+ "<br>");
res.write("Tela paciente"+paciente.TelaPaciente()+ "<br>");
res.end ();
}).listen(5021); 
