import React, { Fragment } from "react";
import { Card } from "./Card";
import Sort from "./Sort";
import { connect } from "react-redux";
import Loader from "./loadercomp";
import { callApi } from "../action/actions";
import { bindActionCreators } from "redux";

class Paginations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastpage: 4
    };
    this.onPageClick = this.onPageClick.bind(this);
    this.generatePageLinks = this.generatePageLinks.bind(this);
  }

  generatePageLinks(index) {
    let { total_results, activePage } = this.props;
    let noofpages = Math.ceil(total_results / 10);
    let pages = this.pagination(activePage, noofpages);

    return (pages || []).map(pageNo => {
      return activePage == pageNo ? (
        <li key={pageNo} className="page-item active">
          <a onClick={this.onPageClick} className="page-link">
            {pageNo}
          </a>
        </li>
      ) : (
        <li key={pageNo} className="page-item ">
          <a onClick={() => this.onPageClick(pageNo)} className="page-link">
            {pageNo}
          </a>
        </li>
      );
    });
  }

  onPageClick(e) {
    if (e != "...") this.props.callApi(this.props.query, e);
  }

  pagination(activePage, noOfPages) {
    let current = activePage,
      last = noOfPages,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;
    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  }

  renderCards = () => {
    return (
      <Fragment>
        <Card
          users={this.props.users}
          loading={this.props.loading}
          total_results={this.props.total_results}
        />
        <ul className="pagination float-right">{this.generatePageLinks()}</ul>
      </Fragment>
    );
  };

  render() {
    let { loading } = this.props;
    return (
      <Fragment>
        <Sort />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {loading ? <Loader /> : this.renderCards()}
          </div>
          <div className="col-md-3"></div>
        </div>
      </Fragment>
    );
  }
} //class

function mapStateToProps(state) {
  let {
    userData,
    loading,
    total_results,
    activePage,
    query
  } = state.rootReducer;
  return {
    users: userData,
    loading: loading,
    total_results: total_results,
    activePage: activePage,
    query: query
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ callApi }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginations);
