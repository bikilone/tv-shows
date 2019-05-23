import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTvShows, saveToLibrary, getLibrary } from "../../redux/actions";
import SingleCard from "../../components/SingleCard/SingleCard";
import { Container, Row, Spinner } from "react-bootstrap";

const mapStateToProps = state => ({
  tvShows: state.fetchTvShows.tvShows,
  isPending: state.fetchTvShows.isPending,
  library: state.getLibrary.library,
  search: state.searchTvShows.search
});

const mapDispatchToProps = dispatch => ({
  fetchTvShows: () => dispatch(fetchTvShows()),
  saveToLibrary: data => {
    dispatch(saveToLibrary(data));
    dispatch(getLibrary());
  },
  getLibrary: () => dispatch(getLibrary())
});

class CardList extends Component {
  componentDidMount() {
    this.props.fetchTvShows();
    this.props.getLibrary();
  }
  render() {
    const { tvShows, isPending, saveToLibrary, library, search } = this.props;
    const filteredTvShows = tvShows.filter(tvShow =>
      tvShow.name.toLowerCase().includes(search.toLowerCase())
    );
    return isPending ? (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40vh" }}
      >
        <Spinner animation="border" />
      </div>
    ) : (
      <Container fluid={true}>
        <Row>
          {filteredTvShows.map(tvShow => {
            const index = library.findIndex(
              libraryShow =>
                JSON.stringify(libraryShow.id) === JSON.stringify(tvShow.id)
            );
            let fill = "";
            if (index === -1) {
              fill = "white";
            } else {
              fill = "#000000";
            }
            return (
              <SingleCard
                fill={fill}
                id={tvShow.id}
                saveToLibrary={saveToLibrary}
                key={tvShow.id}
                src={tvShow.image.medium}
                title={tvShow.name}
                text={tvShow.summary}
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
)(CardList);
