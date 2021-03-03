import React from 'react';
import config from '../config';
import { Form, Tab, Table, Tabs } from 'react-bootstrap';

export default class Transactions extends React.Component{
  constructor(props){
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    super(props);

    this.state = {
      tran_rows: [],
      bill_rows:[],
      income_rows:[],
      month:yyyy+'-'+mm,
    }
}

generate_row_html(tran_data) {
  let tran_html = [];
  for (var id in tran_data) {
    let dt = new Date(tran_data[id].transaction_ts);
    tran_html.push(
      <tr>
        <td>{tran_data[id].account_number}</td>
        <td> {dt.toString()}</td>
        <td> {tran_data[id].transaction_name}</td>
        <td> {tran_data[id].category_name} </td>
        <td> {'$ '+tran_data[id].amount} </td>
      </tr>
    );
  }
  return tran_html;
}

async componentDidMount() {
  let sql_month = this.state.month + '-01';
  
  const url_tran = `${config.apiUrl}/transaction/${this.props.userid}/${sql_month}`;
  const response_tran = await fetch(url_tran);
  const tran_data = await response_tran.json();

  const url_bills = `${config.apiUrl}/transaction/bills/${this.props.userid}/${sql_month}`;
  const response_bills = await fetch(url_bills);
  const bills_data = await response_bills.json();

  const url_income = `${config.apiUrl}/transaction/income/${this.props.userid}/${sql_month}`;
  const response_income = await fetch(url_income);
  const income_data = await response_income.json();

  let tran_html = this.generate_row_html(tran_data)
  let bills_html = this.generate_row_html(bills_data)
  let income_html = this.generate_row_html(income_data)

  
  this.setState({tran_rows:tran_html, bill_rows: bills_html, income_rows: income_html});
}

async componentDidUpdate(prevProps, prevState) {
  if(this.state.month !== prevState.month)
  {
      let sql_month = this.state.month + '-01';

      const url_tran = `${config.apiUrl}/transaction/${this.props.userid}/${sql_month}`;
      const response_tran = await fetch(url_tran);
      const tran_data = await response_tran.json();
    
      const url_bills = `${config.apiUrl}/transaction/bills/${this.props.userid}/${sql_month}`;
      const response_bills = await fetch(url_bills);
      const bills_data = await response_bills.json();
    
      const url_income = `${config.apiUrl}/transaction/income/${this.props.userid}/${sql_month}`;
      const response_income = await fetch(url_income);
      const income_data = await response_income.json();
    
      let tran_html = this.generate_row_html(tran_data)
      let bills_html = this.generate_row_html(bills_data)
      let income_html = this.generate_row_html(income_data)
    
      
      this.setState({tran_rows:tran_html, bill_rows: bills_html, income_rows: income_html});
  }
}

setMonth(event) {
  this.setState({month:event.target.value});
}

all_trans() {
  return ( 
  <div> 
    <Table striped bordered hover>
      <thead>
        <tr>
        <th>Account Number</th>
          <th>Date and Time</th>
          <th>Transaction Details</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead> 
      <tbody>{this.state.tran_rows} </tbody> 
    </Table>
  </div> )
}

all_bills() {
  return ( <div> <Table striped bordered hover> 
  <thead>
    <tr>
    <th>Account Number</th>
      <th>Date and Time</th>
      <th>Transaction Details</th>
      <th>Category</th>
      <th>Amount</th>
    </tr>
  </thead> <tbody>{this.state.bill_rows} </tbody> </Table></div> )
}

all_income() {
  return ( <div> <Table striped bordered hover> 
  <thead>
    <tr>
      <th>Account Number</th>
      <th>Date and Time</th>
      <th>Transaction Details</th>
      <th>Category</th>
      <th>Amount</th>
    </tr>
  </thead><tbody>{this.state.income_rows} </tbody> </Table></div> )
}

render()
{
  return(
      <>
        <Form >
            <Form.Control style={{width:'30%', border: 'none'}} type="month" name="month" size="lg" defaultValue={this.state.month} onChange={this.setMonth.bind(this)}/>
        </Form>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          <Tab eventKey="all" title="All">
            {this.all_trans()}
          </Tab>
          <Tab eventKey="bills" title="Bills">
            {this.all_bills()}
          </Tab>
          <Tab eventKey="income" title="Income">
            {this.all_income()}
          </Tab>
        </Tabs>
      </>
      );
}
};