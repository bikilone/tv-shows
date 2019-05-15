import React, { Component } from "react";
import { connect } from "react-redux";
import { getLibrary } from "../../redux/actions";
import SingleCard from "../../components/SingleCard/SingleCard";
import { Container, Row } from "react-bootstrap";

const mapStateToProps = state => ({
  tvShows: state.getLibrary.library,
  error: state.getLibrary.error
});

const mapDispatchToProps = dispatch => ({
  getLibrary: () => dispatch(getLibrary())
});

class Library extends Component {
  componentDidMount() {
    this.props.getLibrary();
  }
  render() {
    const { tvShows, error } = this.props;
    return error ? (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40vh" }}
      >
        {error}
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
)(Library);
