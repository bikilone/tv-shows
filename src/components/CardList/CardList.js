import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTvShows } from "../../redux/actions";
import SingleCard from "../SingleCard/SingleCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const mapStateToProps = state => ({
  tvShows: state.tvShows,
  isPending: state.isPending
});

const mapDispatchToProps = dispatch => ({
  fetchTvShows: () => dispatch(fetchTvShows())
});

class CardList extends Component {
  componentDidMount() {
    this.props.fetchTvShows();
  }
  render() {
    const { tvShows, isPending } = this.props;
    return isPending ? (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40vh" }}
      >
        <Spinner animation="border" />
      </div>
    ) : (
      <Container fluid={true} style={{ marginTop: "20px" }}>
        <Row>
          {tvShows.map(tvShow => (
            <SingleCard
              key={tvShow.id}
              src={tvShow.image.medium}
              title={tvShow.name}
              text={tvShow.summary}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
