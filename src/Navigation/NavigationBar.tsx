import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";

function NavigationBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <div className="OuterContainer">
            <div>
              <Navbar.Brand href="#home">Personal Finance Editor</Navbar.Brand>
            </div>

            <div>
              <Nav className="me-auto navLinks">
                <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#AddExpenses">Add Expenses</Nav.Link>
                <Nav.Link href="#Reports">Reports</Nav.Link>
                <Nav.Link href="#Settings">Settings</Nav.Link>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
