import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  // updateFilter: (filter, value) => dispatch(justUpdateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
