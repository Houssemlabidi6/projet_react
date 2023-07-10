import "./App.css";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Figure,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* formulaire */}
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="name@example.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Password</Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <br />
      {/* les card */}
      <h1>how to be developer front end ?</h1>
      <Figure>
        <Figure.Image
          width={500}
          height={280}
          alt="171x180"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*l4xICbIIYlz1OTymWCoUTw.jpeg"
        />
        <Figure.Caption>HTML, CSS, JAVASCRIPT</Figure.Caption>
      </Figure>

      <Figure>
        <Figure.Image
          width={500}
          height={280}
          alt="171x180"
          src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
        />
        <Figure.Caption>React JS</Figure.Caption>
      </Figure>

      <Figure>
        <Figure.Image
          width={500}
          height={280}
          alt="171x180"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg"
        />
        <Figure.Caption>front end developer</Figure.Caption>
      </Figure>
      {/* footer */}
      <div className="xyz">© 2023 Copyright</div>
    </>
  );
}

export default App;
