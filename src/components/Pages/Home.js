import "../../Styles/Home.css";
import msd from "../../images/tai.jpg";
import abc from "../../images/react.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Carosal Started */}
      <div>
        <img className="vtutor" src={msd} alt="" />
      </div>
      {/* carosal End */}

      <div className="grid-container container-fluid">
        {/* card 1 */}
        {/* <div className="Row"> */}
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abc} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button onClick={() => navigate("/checkout")}>CheckOut</button>
              </Card.Body>
            </Card>
          </div>
          {/* card 2 */}
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abc} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button onClick={() => navigate("/checkout")}>CheckOut</button>
              </Card.Body>
            </Card>
          </div>
          {/* card 3 */}
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={abc} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button
                  className="btn-primary"
                  onClick={() => navigate("/checkout")}
                >
                  CheckOut
                </button>
              </Card.Body>
            </Card>
          </div>
        {/* </div> */}
      </div>

      <div>Section 3</div>
      <div>section 4</div>
      <div></div>
    </div>
  );
};

export default Home;
