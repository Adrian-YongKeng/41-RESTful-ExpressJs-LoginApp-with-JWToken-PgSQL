import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");//remove jwt from local storage 
    navigate("/");//redirect to login page
  };

  return (
    <Container className='text-center'>
      <h1 className='my-4'>Welcome to your profile page!</h1>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body className='px-5'>
              <Card.Title className='mb-4'>This is your Profile</Card.Title>
              <img src="./brucelee.gif" height="200px" />
              <Card.Text>Watcha! Don't fear failure. Not failure, but low aim, is the crime. In great attempts, it is glorious even to fail. It's not the daily increase but daily decrease. Hack away at the unessential. <br />
                Knowing is not enough; we must apply. Willing is not enough; we must do. Watcha! I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. Absorb what is useful, discard what is not, add what is uniquely your own.<br />  Watcha! Watcha! Watcha!
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
      </Row>
      <Button className="my-5" variant="outline-danger" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  )
}
