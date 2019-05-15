import React, { Component } from "react";
import { connect } from "react-redux";
import { getLibrary, saveToLibrary } from "../../redux/actions";
import SingleCard from "../../components/SingleCard/SingleCard";
import { Container, Row } from "react-bootstrap";

const mapStateToProps = state => ({
  library: state.getLibrary.library,
  error: state.getLibrary.error
});

const mapDispatchToProps = dispatch => ({
  getLibrary: () => dispatch(getLibrary()),
  saveToLibrary: data => {
    dispatch(saveToLibrary(data));
    dispatch(getLibrary());
  }
});

class Library extends Component {
  componentDidMount() {
    this.props.getLibrary();
  }
  render() {
    const { library, error, saveToLibrary } = this.props;
    return library.length < 1 ? (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40vh" }}
      >
        Library is empty
      </div>
    ) : (
      <Container fluid={true} style={{ marginTop: "20px" }}>
        <Row>
          {library.map(tvShow => {
            return (
              <SingleCard
                fill="blue"
                id={tvShow.id}
                key={tvShow.id}
                src={tvShow.image}
                title={tvShow.title}
                text={tvShow.text}
                saveToLibrary={saveToLibrary}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
