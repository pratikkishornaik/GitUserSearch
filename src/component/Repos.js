import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRepos, discardRepo } from "../action/actions";

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showRepo: false, toggled: false, repoDetails: [] };
    this.repoToggle = this.repoToggle.bind(this);
    this.renderRepoRecords = this.renderRepoRecords.bind(this);
  }

  repoToggle(username) {
    // this.state.showRepo?this.props.discardRepo():null;
    this.setState({ showRepo: !this.state.showRepo });
    console.log(typeof username);
    typeof username == "string" ? this.props.getRepos(username) : null;
  }

  renderRepoRecords() {
    let { repoData, userurl } = this.props;

    let userRepo = repoData[userurl] || undefined;

    return (userRepo && userRepo.length === 0) || userRepo === undefined ? (
      <tr>
        <th colSpan="2">Loading...</th>
      </tr>
    ) : (
      <Fragment>
        <tr>
          <th>Repo Name</th>
          <th>Fork Count</th>
        </tr>
        {(userRepo || []).map((repoObj, index) => {
          return (
            <tr key={repoObj.name} key={index}>
              <td>
                <a href={repoObj.html_url} target="_blank">
                  {repoObj.name}
                </a>
              </td>
              <td>{repoObj.forks_count}</td>
            </tr>
          );
        })}
      </Fragment>
    );
  }

  render() {
    let { userurl } = this.props;
    let { showRepo } = this.state;

    return showRepo ? (
      <div key="repodata">
        <button
          onClick={this.repoToggle}
          className="btn float-right  btn-primary"
        >
          Collapse
        </button>
        <br />
        <br />
        <table className="table text-center table-striped">
          <tbody>
            <tr>
              <th colSpan="2">Repositories</th>
            </tr>
            {this.renderRepoRecords()}
          </tbody>
        </table>
      </div>
    ) : (
      <button
        onClick={() => this.repoToggle(userurl)}
        className="btn float-right btn-primary"
      >
        Details
      </button>
    );
  }
}

function mapStateToProps(state) {
  return { repoData: state.rootReducer.repoData };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getRepos: getRepos, discardRepo: discardRepo },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos);
