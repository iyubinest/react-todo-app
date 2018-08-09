import { History } from 'history';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../authActions';
import { AuthAction } from '../authReducer';
import Login from '../Login/Login';

const mapDispatchToProps = (
  dispatch: Dispatch<AuthAction>,
  ownProps: { history: History },
) => ({
  login() {
    dispatch(login());
    ownProps.history.push('/todos');
  },
});

export default withRouter(connect(null, mapDispatchToProps)(
  Login,
) as React.ComponentType<any>);