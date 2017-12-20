import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    login: user => dispatch(login(user)),
    toggleLogin: () => ownProps.toggleLogin(),
    toggleSignup: () => ownProps.toggleSignup()
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
