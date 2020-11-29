import React from 'react';
//import ReactDOM from 'react-dom';
class AccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:"", password:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   // console.log(event.target);
    const newState = {}
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    postData('/accounts/register', this.state)
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
       })
    console.log('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <label>
          Re-Enter password:
          <input type="password" name="check" value={this.state.confirmPassword} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
export default AccountForm;