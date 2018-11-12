import React from "react";
import { Table } from 'semantic-ui-react'

const PresRow = props => {

  return (
    <Table.Row>
      <Table.Cell>{props.pres.name}</Table.Cell>
      <Table.Cell>{props.pres.birthday}</Table.Cell>
      <Table.Cell>{props.pres.birthplace}</Table.Cell>
      <Table.Cell>{props.pres.deathday}</Table.Cell>
      <Table.Cell>{props.pres.deathplace}</Table.Cell>
    </Table.Row>
  );

};

export default PresRow;
