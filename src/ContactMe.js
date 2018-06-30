import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

class ContactMe extends Component{
      constructor(props){
        super(props);
        this.state={value:'Hi, '}
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)

      }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    handleChange(event){
      this.setState({value:event.target.value});
    }

	render(){
		return(
<div>
<h2 className="bg-info text-secondary"> Have a question or want me to work for you?
 </h2>
	<form onSubmit={this.handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputFName">Name First</label>
      <input type="text" className="form-control text-capitalize" id="inputName" placeholder="First Name"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputLName">Last Name</label>
      <input type="password" className="form-control text-capitalize" id="inputPassword4" placeholder="Last Name"/>
    </div>
  </div>

  <div className="form-group">
    <label for="inputAddress">Email</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="jackfin@gmail.com"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Auburn, Sydney NSW, Australia"/>
  </div>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={this.state.value}  onChange={this.handleChange} rows="3"></textarea>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
			)
	}


}

export default ContactMe;