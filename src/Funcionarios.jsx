import React from "react";

const Funcionarios = ({ funcionarios }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Salário</th>
          <th>Função</th>
        </tr>
      </thead>
      <tbody>
        {funcionarios.map((func, index) => (
          <tr key={index}>
            <td>{func.nome}</td>
            <td>{new Date(func.nascimento).toLocaleDateString("pt-BR")}</td>
            <td>R$ {func.salario.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
            <td>{func.funcao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Funcionarios;

