import "./records.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Records({ details, onDelete, onUpdate}) {
  return (
    <Card className="me-3 mt-4" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={details?.avatar} />
      <Card.Body>
        <Card.Text><span className="fw-bolder">Name</span>- {details?.profile?.firstName} {details?.profile?.lastName}</Card.Text>
        <Card.Text><span className="fw-bolder">Email</span>- {details?.profile?.email}</Card.Text>
        <Card.Text><span className="fw-bolder">Job title</span>- {details?.jobTitle}</Card.Text>
        <Card.Text><span className="fw-bolder">Bio</span>- {details?.Bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Records;
