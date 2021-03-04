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

check_rows (print_msg) {
    if(print_msg == "any")
    {
      return (
      <div style={{color:'#ff7d4d'}}>
        <br/>
        <h3>We were unable to find any transactions for {this.state.month}, but you might try other months!</h3>
      </div>);
    }
    else {
      return (
      <div style={{color:'#ff7d4d'}}>
        <br/>
        <h3>We were unable to find any {print_msg} for {this.state.month}, but you might try other months!</h3>
      </div>);
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

      let tran_html = null;
      let bills_html = null;
      let income_html = null;

      if(tran_data.message === "Not found !")
      {
        tran_html = this.check_rows("any");
      }
      else {
        tran_html = this.generate_row_html(tran_data)
        tran_html = this.all_trans(tran_html)
        console.log(tran_html)
      }

      if(bills_data.message === "Not found !")
      {
        bills_html = this.check_rows("bills");
      }
      else {
        bills_html = this.generate_row_html(bills_data)
        bills_html = this.all_trans(bills_html)
      }
      
      if(income_data.message === "Not found !")
      {
        income_html = this.check_rows("income");
      }
      else {
        income_html = this.generate_row_html(income_data)
        income_html = this.all_trans(income_html)
      }

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

      let tran_html = null;
      let bills_html = null;
      let income_html = null;

      if(tran_data.message === "Not found !")
      {
        tran_html = this.check_rows("any");
      }
      else {
        tran_html = this.generate_row_html(tran_data)
        tran_html = this.all_trans(tran_html)
        console.log(tran_html)
      }

      if(bills_data.message === "Not found !")
      {
        bills_html = this.check_rows("bills");
      }
      else {
        bills_html = this.generate_row_html(bills_data)
        bills_html = this.all_trans(bills_html)
      }
      
      if(income_data.message === "Not found !")
      {
        income_html = this.check_rows("income");
      }
      else {
        income_html = this.generate_row_html(income_data)
        income_html = this.all_trans(income_html)
      }

      this.setState({tran_rows:tran_html, bill_rows: bills_html, income_rows: income_html});
  }
}

setMonth(event) {
  this.setState({month:event.target.value});
}

all_trans(type) {
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
      <tbody>{type} </tbody> 
    </Table>
  </div> )
}


render()
{
  return(
      <>
        <Form>
          <Form.Control style={{width:'20%', border: 'none'}} size="lg" type="month" name="month" width="w-25" defaultValue={this.state.month} onChange={this.setMonth.bind(this)}/>
        </Form>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          <Tab eventKey="all" title="All">
            {this.state.tran_rows}
          </Tab>
          <Tab eventKey="bills" title="Bills">
            {this.state.bill_rows}
          </Tab>
          <Tab eventKey="income" title="Income">
            {this.state.income_rows}
          </Tab>
        </Tabs>
      </>
      );
}
};