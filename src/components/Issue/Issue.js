import React, { Component } from 'react';
import './issue.css';

export default class Issue extends Component {
  state = {
    newIssue: [],
    newId: '',
    newIssueName: '',
    newDevName: '',
    newStatus: '',
  };

  handleOnChangeIssueId = ({ target }) => {
    this.setState({
      newId: target.value,
    })
  };

  handleOnChangeIssueName = ({ target }) => {
    this.setState({
      newIssueName: target.value,
    })
  };

  handleOnChangeDevName = ({ target }) => {
    this.setState({
      newDevName: target.value,
    })
  };

  handleOnChangeStatus = ({ target }) => {
    this.setState({
      newStatus: target.value,
    })
  };

  create = () => {
    const { newId, newIssueName, newDevName, newStatus } = this.state;
    const { create } = this.props;

    create(newId, newIssueName, newDevName, newStatus);
    this.setState({
      newId: '',
      newIssueName: '',
      newDevName: '',
      newStatus: '',
    })
  };

  delete = (i) => {
    const { deleteIssue } = this.props;
    deleteIssue(i);
  }

  // handleOnClickAddIssue = () => {
  //   const { issue, id, issueName, devName, status } = this.state;
  //   let newIssue = [...issue, { id, issueName, devName, status }];
  //   this.setState({
  //     issue: newIssue,
  //     id: id + 1,
  //     issueName: '',
  //     devName: '',
  //     status: '',
  //   });
  // };

  // handleOnClickDelete = (i) => {
  //   const { issue } = this.state;
  //   let newIssue = issue.filter(function (_, index) {
  //     return index !== i;
  //   });
  //   this.setState({
  //     issue: newIssue,
  //   })
  // }

  renderOutput = () => {
    const { issue } = this.props;
    return (
      issue.map((value, i) =>
        <div key={i}>
          <b>Id issue:</b> {value.id}
          <br />
          <b>Tên issue:</b> {value.issueName}
          <br />
          <b>Người xử lý:</b> {value.devName}
          <br />
          <b>Tình trạng:</b> {value.status}
          <br />
          <button onClick={() => { this.delete(i) }}>Xóa Issue</button>
          <div>------------------------------------</div>
        </div>
      )
    )
  };

  render() {

    const { newId, newIssueName, newDevName, newStatus } = this.state;
    return (
      <div className="wrapper">
        <h1>Issue Form</h1>
        <label>Mã Issue</label>
        <input onChange={this.handleOnChangeIssueId} value={newId} />
        <label>Tên Issue</label>
        <input value={newIssueName} onChange={this.handleOnChangeIssueName} />
        <label>Tên người xử lý</label>
        <input value={newDevName} onChange={this.handleOnChangeDevName} />
        <label>Trạng thái</label>
        <input onChange={this.handleOnChangeStatus} value={newStatus} />
        <br />
        <button onClick={this.create}>Thêm issue</button>
        {this.renderOutput()}
      </div>
    )
  }
}
