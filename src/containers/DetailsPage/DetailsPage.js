import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleShow } from "../../redux/actions";
import {
  Spinner,
  Tabs,
  Tab,
  Col,
  Card,
  Row,
  Image,
  Container
} from "react-bootstrap";

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
    const { image, name, summary, seasons, cast } = singleShow;
    const createMarkup = () => ({
      __html: summary
    });
    return isPending ? (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "40vh" }}
      >
        <Spinner animation="border" />
      </div>
    ) : (
      <div>
        <Row>
          <Col xs={6}>
            <Card style={{ marginBottom: "5px" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={createMarkup()} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Tabs defaultActiveKey="Cast" id="uncontrolled-tab-example">
              <Tab eventKey="Seasons" title="Seasons">
                <ul style={{ marginTop: "10px", listStyle: "none" }}>
                  {seasons.map((season, index) => (
                    <li key={index}>
                      <span style={{ fontWeight: "bold" }}>
                        Season {index + 1}
                      </span>{" "}
                      {season.premiereDate} {" - "} {season.endDate}
                      <hr />
                    </li>
                  ))}
                </ul>
              </Tab>
              <Tab eventKey="Cast" title="Cast">
                <Container>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      marginTop: "10px"
                    }}
                  >
                    {cast.map((actor, index) => (
                      <li key={index} style={{ marginBottom: "5px" }}>
                        <Row style={{ alignItems: "center" }}>
                          <Col xs={3}>
                            <Image
                              src={actor.person.image.medium}
                              style={{ width: "100%", minWidth: "40px" }}
                            />
                          </Col>
                          <Col xs={{ span: 6, offset: 1 }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%"
                              }}
                            >
                              <p>
                                {actor.person.name} as {actor.character.name}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <hr />
                      </li>
                    ))}
                  </ul>
                </Container>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
