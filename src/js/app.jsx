import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: "Select a Term",
      output: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]:value});
  }

  handleClick(){
    const p = this.state.balance;
    const r = this.state.rate / 1200;
    const n = this.state.term *12;
    const m = ((p*(r * Math.pow(1 + r,n))/(Math.pow(1 + r,n) - 1)).toFixed(2));

    this.setState({output: m });
  };


  render() {
    return (
      <div className='container' id="mg">
        <h3>Mortgage Calculator</h3>
          <div className="">
            <label htmlFor="balance" className="col-sm-2 control-label">Loan Balance</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="balance" placeholder="Balance" onChange={this.onChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="rate" className="col-sm-2 control-label">Rate</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" name="rate" placeholder="Rate" onChange={this.onChange}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="term" className="col-sm-2 control-label">Term</label>
            <div className="col-sm-10">
              <select type="text" className="form-control" name="term" placeholder="Select Term in Years" onChange={this.onChange} defaultValue={this.state.term}>
                <option disabled>Select a Term</option>
                <option value="10">10 Years</option>
                <option value="15">15 Years</option>
                <option value="30">30 Years</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="submit btn btn-default" name="submit" onClick={this.handleClick}>Submit</button>
            </div>
            <div id='output'>
              Your Monthly Payment is {""} { new Intl.NumberFormat('dollars', {

     style: 'currency',

    currency: 'USD'

   }).format(this.state.output)}
   </div>
          </div>
      </div>
    );
  }
}
