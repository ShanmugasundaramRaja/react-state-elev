import { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  return (
    <Container>
      <div class="container-fluid">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#">Goodreads</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">My Books</Nav.Link>
              <NavDropdown title="Browse" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Community" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Row>
        {books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b) => (
            <Col xs={3} key={b.asin}>
              <SingleBook
                book={b}
                selectedBook={selectedBook}
                changeSelectedBook={(asin) => setSelectedBook(asin)}
              />
            </Col>
          ))}
      </Row>
      <Col md={4}>
        <CommentArea asin={selectedBook} />
      </Col>
    </Container>
  );
};

export default BookList;