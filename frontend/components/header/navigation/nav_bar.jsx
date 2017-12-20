import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginContainer from './login_container';
import SignupContainer from './signup_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: false,
      signupVisible: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleLogin(e) {
    this.setState({signupVisible: false});
    this.setState({loginVisible: !this.state.loginVisible});
  }

  toggleSignup(e) {
    this.setState({loginVisible: false});
    if (e == true) {
      this.setState({signupVisible: true});
    } else if (e == false) {
      this.setState({signupVisible: false});
    } else {
      this.setState({signupVisible: !this.state.signupVisible});
    }

  }
  renderLoggedInItems() {
    return(
      <ul className='logged-in-items'>
        <li>{this.props.first_name}</li>
        <li>Log Out</li>
      </ul>
    );
  }

  renderLoggedOutItems() {
    return(
      <ul className='logged-out-items'>
        <li onClick={this.toggleLogin}>Log In</li>
        <li onClick={this.toggleSignup}>Sign up</li>
      </ul>
    );
  }

  renderListItems() {
    if (this.props.loggedIn) {
      return this.renderLoggedInItems();
    } else {
      return this.renderLoggedOutItems();
    }
  }
  render() {
    return(
      <nav className='nav-div'>
        {this.renderListItems()}
        { this.state.loginVisible
        ? (<LoginContainer
          toggleLogin={this.toggleLogin}
          toggleSignup={this.toggleSignup}
          />)
        : null}
        { this.state.signupVisible
          ? (<SignupContainer
              toggleLogin={this.toggleLogin}
              toggleSignup={this.toggleSignup}/>)
          : null
        }
      </nav>
    );
  }
}

export default withRouter(NavBar);
