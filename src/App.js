import React, { Component } from 'react';
import { Table, Button, Form } from 'semantic-ui-react'
import PresRow from './PresRow';

class App extends Component {

  state = {
    data: null,
  }

  componentDidMount = () => {
    this.getNewData("")
  }

  getNewData = (arg) => {
    fetch(`http://localhost:3000/api/v1/presidents/`+arg).then(res => res.json()).then(
      data => {
        this.setState({
          data: data
        })
      }
    )
  }

  getAllRows = () => {
    return this.state.data.map(pres => {
      return <PresRow pres={pres}/>
    })
  }

  tableRender = () => {
    return (
      <Table celled fixed inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>President</Table.HeaderCell>
            <Table.HeaderCell>Birthday</Table.HeaderCell>
            <Table.HeaderCell>Birthplace</Table.HeaderCell>
            <Table.HeaderCell>Death Day</Table.HeaderCell>
            <Table.HeaderCell>Death Place</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.getAllRows()}
        </Table.Body>
      </Table>
    )
  }

  render() {
    return (
      <div>
        <Button.Group >
          <Form.Button color='black' onClick={() => this.getNewData("ascending")} content='Ascending' />
          <Form.Button color='black' onClick={() => this.getNewData("descending")} content='Descending' />
        </Button.Group>
        {this.state.data ? this.tableRender() : null}
      </div>
    )
  }
}

export default App;
