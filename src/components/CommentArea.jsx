import { Component } from "react";
import { Row } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    selected: false,
  };

  fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmJiNjdjMjM5YzAwMTUyZjRiNTAiLCJpYXQiOjE3MTk0OTY2NDEsImV4cCI6MTcyMDcwNjI0MX0.0Bq5bBUPf3HVB2c3ybiWsbU4ZeiQfFCmvw1Z1Pz-rCQ",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errorer nel reperimento dei dati.");
        }
      })
      .then((comments) => {
        console.log(comments);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    console.log("io sono COMPONENTS");
    this.fetchComments();
  }

  render() {
    console.log("io sono RENDER");
    return (
      <Row>
        <h4>Recensioni:</h4>
        <ListGroup></ListGroup>
      </Row>
    );
  }
}
export default CommentArea;
