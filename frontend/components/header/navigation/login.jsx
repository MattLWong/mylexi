import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.login_default = this.login_default.bind(this);
    this.doBoth = this.doBoth.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.toggleLogin();
    modal.style.display = "none";
    this.props.login({user});
  }

  login_default(e) {
    e.preventDefault();
    this.props.toggleLogin();
    this.props.login({user: {username: "mwong9968@gmail.com", password: "password"}});
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({user: {username: this.state.username, password: this.state.password}});
  }

  doBoth() {
    this.props.toggleLogin();
    this.props.toggleSignup();
  }

  render() {
    return (
      <div className="modal" id="loginModal">
        <div className="modal-content" id="modal-box">
          <span className='modal-title'>Log In</span>

          <form onSubmit={this.handleSubmit} className="form-box">
            {this.renderErrors()}
            <div className="login-form">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="user-input-1"
                  placeholder="Username"
                />
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="user-input-1"
                  placeholder="Password"
                />
              <br/>
              <button className="login-button" onClick={this.handleSubmit}>Sign In</button><br/>
              <button className="guest-login-button" onClick={this.login_default}>Guest log in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
