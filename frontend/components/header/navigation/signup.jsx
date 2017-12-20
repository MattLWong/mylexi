import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doBoth = this.doBoth.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length < 1) {
      this.props.toggleSignup();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.signup({user: {first_name: this.state.first_name, username: this.state.username, password: this.state.password}});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  doBoth() {
    this.props.toggleSignup();
    this.props.toggleLogin();
  }

  render() {
    return (
      <div className="modal" id="signupModal">
        <div className="modal-content" id="modal-box">
          <span className='modal-title'>Sign Up</span>

          <form onSubmit={this.handleSubmit} className="form-box">
            {this.renderErrors()}
            <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="user-input-1"
                placeholder="Username"
              />
                  <input type="text"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="user-input-1"
                    placeholder="First name"
                  />
                <br/>

                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="user-input-1"
                  placeholder="Password"
                />
              <br/>
              <button className="signup-button" onClick={this.handleSubmit}>Sign up!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
