import React from "react";
import Repos from "./Repos";
export class Card extends React.Component {
  renderUserCards = () => {
    let { users } = this.props;
    return users.map((user, index) => {
      return (
        <div key={index}>
          <div className="shadow p-4 mb-4 bg-white">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="rounded-circle pull-right"
                  src={user.avatar_url}
                  alt="user_profile"
                  height="100px"
                  width="100px"
                />
              </div>

              <div className="col-md-7">
                <h3>{user.login}</h3>
                <br />
                <label>Profile:&nbsp; </label>
                <a target="_blank" href={user.html_url}>
                  {user.html_url}
                </a>
                <br />
                <label>Score:</label>
                {user.score.toFixed(2)}
                <br />
              </div>

              <div className="col-md-1"></div>
            </div>

            <Repos userurl={user.login} />

            <div className="clearfix"></div>
          </div>
        </div>
      );
    });
  };

  renderTotalCount = () => {
    return (
      <span>
        <br />
        <strong>Total Results: {this.props.total_results} </strong>
        <br />
      </span>
    );
  };

  render() {
    let { total_results } = this.props;
    return (
      <div>
        {total_results > 0 ? this.renderTotalCount() : null}
        {this.renderUserCards()}
      </div>
    );
  }
}
