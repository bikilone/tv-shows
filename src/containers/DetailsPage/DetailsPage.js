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
    console.log(singleShow);
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
                <Card.Text
                  dangerouslySetInnerHTML={createMarkup()}
                  // style={{
                  //   height: "100px",
                  //   overflow: "hidden"
                  // }}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Tabs defaultActiveKey="Cast" id="uncontrolled-tab-example">
              <Tab eventKey="Seasons" title="Seasons">
                {seasons.map((season, index) => (
                  <li key={index}>
                    {season.premiereDate} {" - "} {season.endDate}
                  </li>
                ))}
              </Tab>
              <Tab eventKey="Cast" title="Cast">
                <Container>
                  <ul style={{ listStyle: "none", padding: "0" }}>
                    {cast.map((actor, index) => (
                      <li key={index} style={{ marginBottom: "5pxs" }}>
                        <Row style={{ alignItems: "center" }}>
                          <Col xs={3}>
                            <Image
                              src={actor.person.image.medium}
                              style={{ width: "100%", minWidth: "40px" }}
                            />
                          </Col>
                          <Col xs={{ span: 3, offset: 1 }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%"
                              }}
                            >
                              <p>{actor.person.name}</p>
                            </div>
                          </Col>
                        </Row>
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
