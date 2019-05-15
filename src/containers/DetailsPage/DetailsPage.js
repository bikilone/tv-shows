import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleShow } from "../../redux/actions";
import { Spinner } from "react-bootstrap";

const mapStateToProps = state => ({
  singleShow: state.fetchSingleShow.singleShow,
  error: state.fetchSingleShow.error,
  isPending: state.fetchSingleShow.isPending
});

const mapDispatchToProps = dispatch => ({
  fetchSingleShow: id => dispatch(fetchSingleShow(id))
});

class DetailsPage extends Component {
  componentDidMount() {
    this.props.fetchSingleShow(this.props.match.params.id);
  }
  render() {
    const { singleShow, isPending } = this.props;
    console.log(singleShow);
    return isPending ? (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40vh" }}
      >
        <Spinner animation="border" />
      </div>
    ) : (
      <div>Works</div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
