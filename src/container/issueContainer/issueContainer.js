import { connect } from 'react-redux';
import Issue from '../../components/Issue';
import { createAction, deleteAction } from '../../reducers/issue';

const mapStateToProps = (state) => {
  const { issue } = state;
  const { listIssue, id, issueName, devName, status } = issue;

  return {
    issue: listIssue,
    id: id,
    issueName: issueName,
    devName: devName,
    status: status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: function (id, issueName, devName, status) {
      const action = createAction(id, issueName, devName, status);
      dispatch(action);
    },
    deleteIssue: function (index) {
      const action = deleteAction(index);
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Issue);