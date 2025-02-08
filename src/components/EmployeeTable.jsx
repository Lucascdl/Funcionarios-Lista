import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeTable = ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data Nascimento</th>
          <th>Salário</th>
          <th>Função</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <EmployeeItem key={index} employee={emp} />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
