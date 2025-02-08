import React from "react";

const EmployeeItem = ({ employee }) => {
  const formatDate = (date) => new Date(date).toLocaleDateString("pt-BR");
  const formatSalary = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <tr>
      <td>{employee.nome}</td>
      <td>{formatDate(employee.nascimento)}</td>
      <td>{formatSalary(employee.salario)}</td>
      <td>{employee.funcao}</td>
    </tr>
  );
};

export default EmployeeItem;
