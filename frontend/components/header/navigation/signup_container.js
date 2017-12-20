import { connect } from 'react-redux';

import { signup } from '../../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
  toggleSignup: () => ownProps.toggleSignup(),
  toggleLogin: () => ownProps.toggleLogin()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
