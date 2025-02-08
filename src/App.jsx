import React, { useState, useEffect } from "react";
import "./App.css";

const funcionariosData = [
  { nome: "Maria", nascimento: "2000-10-18", salario: 2009.44, funcao: "Operador" },
  { nome: "João", nascimento: "1990-05-12", salario: 2284.38, funcao: "Operador" },
  { nome: "Caio", nascimento: "1961-05-02", salario: 9836.14, funcao: "Coordenador" },
  { nome: "Miguel", nascimento: "1988-10-14", salario: 19119.88, funcao: "Diretor" },
  { nome: "Alice", nascimento: "1995-01-05", salario: 2234.68, funcao: "Recepcionista" },
  { nome: "Heitor", nascimento: "1993-11-19", salario: 1582.72, funcao: "Operador" },
  { nome: "Arthur", nascimento: "1993-03-31", salario: 4071.84, funcao: "Contador" },
  { nome: "Laura", nascimento: "1994-07-08", salario: 3017.45, funcao: "Gerente" },
  { nome: "Helóisa", nascimento: "2003-05-24", salario: 1606.85, funcao: "Eletricista" },
  { nome: "Helena", nascimento: "1996-09-02", salario: 2799.93, funcao: "Gerente" }
];

const formatarData = (data) => new Date(data).toLocaleDateString("pt-BR");

const formatarSalario = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const App = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    let lista = funcionariosData
      .filter((f) => f.nome !== "João")
      .map((f) => ({ ...f, salario: f.salario * 1.1 }))
      .sort((a, b) => a.nome.localeCompare(b.nome)); // Ordenar por nome
    
    setFuncionarios(lista);
  }, []);
  

  if (funcionarios.length === 0) {
    return <h1>Carregando...</h1>; // Evita erro ao tentar renderizar array vazio
  }

  const funcionariosPorFuncao = funcionarios.reduce((acc, f) => {
    acc[f.funcao] = acc[f.funcao] || [];
    acc[f.funcao].push(f);
    return acc;
  }, {});

  const aniversariantes = funcionarios.filter((f) => {
    const mes = new Date(f.nascimento).getMonth() + 1;
    return mes === 10 || mes === 12;
  });

  const funcionarioMaisVelho = funcionarios.reduce((maisVelho, f) => {
    return new Date(f.nascimento) < new Date(maisVelho.nascimento) ? f : maisVelho;
  }, funcionarios[0]);

  const totalSalarios = funcionarios.reduce((total, f) => total + f.salario, 0);
  const salarioMinimo = 1212;

  return (
    <div className="container">
      <h1>Lista de Funcionários</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nascimento</th>
            <th>Salário</th>
            <th>Função</th>
            <th>Qtd. Salários Mínimos</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((f, index) => (
            <tr key={index}>
              <td>{f.nome}</td>
              <td>{formatarData(f.nascimento)}</td>
              <td>{formatarSalario(f.salario)}</td>
              <td>{f.funcao}</td>
              <td>{(f.salario / salarioMinimo).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info-box">
        <h2>Total dos Salários: {formatarSalario(totalSalarios)}</h2>
      </div>

      <div className="info-box">
        <h2>Funcionário Mais Velho</h2>
        <p>
          <strong>{funcionarioMaisVelho.nome}</strong> ({new Date().getFullYear() - new Date(funcionarioMaisVelho.nascimento).getFullYear()} anos)
        </p>
      </div>

      <div className="info-box">
        <h2>Aniversariantes de Outubro e Dezembro</h2>
        <ul>
          {aniversariantes.map((f) => (
            <li key={f.nome}>
              {f.nome} - {formatarData(f.nascimento)}
            </li>
          ))}
        </ul>
      </div>

      <div className="info-box">
        <h2>Funcionários por Função</h2>
        {Object.entries(funcionariosPorFuncao).map(([funcao, lista]) => (
          <div key={funcao}>
            <h3>{funcao}</h3>
            <ul>
              {lista.map((f) => (
                <li key={f.nome}>
                  {f.nome} - {formatarSalario(f.salario)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
