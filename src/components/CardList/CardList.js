import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTvShows } from "../../redux/actions";
import SingleCard from "../SingleCard/SingleCard";
import { Container, Row, Col } from "react-bootstrap";

const mapStateToProps = state => ({
  tvShows: state.tvShows
});

const mapDispatchToProps = dispatch => ({
  fetchTvShows: () => dispatch(fetchTvShows())
});

class CardList extends Component {
  componentDidMount() {
    this.props.fetchTvShows();
  }
  render() {
    const { tvShows } = this.props;
    console.log(tvShows);
    return (
      <Container>
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
