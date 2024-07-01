import { Alert, Badge, ListGroup } from "react-bootstrap";

const CommentsList = ({ comments }) =>
  comments.length > 0 ? (
    <ListGroup>
      {comments.map((review) => (
        <ListGroup.Item
          key={review._id}
          title={review.author}
          className="d-flex justify-content-between align-items-center"
        >
          {review.comment}
          <Badge bg="dark">{review.rate}</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  ) : (
    <Alert variant="warning">Non ci sono ancora recensioni per questo libro.</Alert>
  );
export default CommentsList;
