import React from "react";
import { Card, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import { Crosshair, Edit, Plus, Settings, X, Zap } from "react-feather";
import SimpleBar from "simplebar-react";
import TinymceEditor from "../../../components/TinymceEditor/TinymceEditor";
import BlogAside from "../BlogAside";
import HkDropZone from "../../../components/@hk-drop-zone/HkDropZone";

const NewPostBody = () => {
  return (
    <div className="blog-body">
      <SimpleBar className="nicescroll-bar">
        <Container fluid>
          <Row>
            <Col xxl={9} lg={8}>
              <Form className="edit-post-form">
                <Tab.Container defaultActiveKey="summery">
                  <Nav
                    variant="tabs"
                    className="nav-line nav-icon nav-light border-bottom my-3"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="summery">
                        <span className="nav-link-text">Billing Address</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Post Title</Form.Label> */}
                    <Form.Control placeholder="Company Name" />
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex gap-4 ">
                    {/* <Form.Label>Permalink</Form.Label> */}
                    <Form.Control placeholder="Email ID" />
                    <Form.Control placeholder="Mobile No" />
                  </Form.Group>
                </Tab.Container>
                <Tab.Container defaultActiveKey="billing">
                  <Nav
                    variant="tabs"
                    className="nav-line nav-icon nav-light border-bottom"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="billing">
                        <span className="nav-link-text">Billing Address</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="shipping">
                        <span className="nav-link-text">Shipping Address</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="billing">
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="Street Name" />
                        <Form.Control placeholder="Zip" />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="State" />
                        <Form.Control placeholder="Country" />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="First Name" />
                        <Form.Control placeholder="Last Name" />
                      </Form.Group>
                    </Tab.Pane>
                    <Tab.Pane eventKey="shipping">
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="Street Name" />
                        <Form.Control placeholder="Zip" />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="State" />
                        <Form.Control placeholder="Country" />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        <Form.Control placeholder="First Name" />
                        <Form.Control placeholder="Last Name" />
                      </Form.Group>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <Tab.Container defaultActiveKey="details">
                  <Nav
                    variant="tabs"
                    className="nav-line nav-icon nav-light border-bottom"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="details">
                        <span className="nav-link-text">Company Details</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="details">
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="VAT Number" />
                        <Form.Control placeholder="COC Number" />
                      </Form.Group>
                      <Form.Group className="mb-3 d-flex gap-4 ">
                        {/* <Form.Label>Permalink</Form.Label> */}
                        <Form.Control placeholder="Industry" />
                        <Form.Control placeholder="Company Size" />
                      </Form.Group>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <Tab.Container defaultActiveKey="contact">
                  <Nav
                    variant="tabs"
                    className="nav-line nav-icon nav-light border-bottom"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="contact">
                        <span className="nav-link-text">Contact Person</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="notes">
                        <span className="nav-link-text">Notes</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="classify">
                        <span className="nav-link-text">Classify</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="contact">
                      <div className="d-flex align-items-center gap-1 flex-column flex-md-row">
                        <Form.Group className="mb-3 gap-4 ">
                          <Form.Label>Salutation</Form.Label>
                          <Form.Control placeholder="Salutation" />
                          {/* <Form.Control placeholder="Zip" /> */}
                        </Form.Group>
                        <Form.Group className="mb-3 gap-4 ">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control placeholder="First Name" />
                          {/* <Form.Control placeholder="Last Name" /> */}
                        </Form.Group>
                        <Form.Group className="mb-3 gap-4 ">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control placeholder="Last Name" />
                          {/* <Form.Control placeholder="Country" /> */}
                        </Form.Group>

                        <Form.Group className="mb-3 gap-4 ">
                          <Form.Label>Email</Form.Label>
                          <Form.Control placeholder="Email" />
                          {/* <Form.Control placeholder="Last Name" /> */}
                        </Form.Group>
                        <Form.Group className="mb-3 gap-4 ">
                          <Form.Label>Work Phone</Form.Label>
                          <Form.Control placeholder="Work Phone" />
                          {/* <Form.Control placeholder="Last Name" /> */}
                        </Form.Group>
                        <Form.Group className="mb-3 gap-4 ">
                          <Form.Label>Mobile</Form.Label>
                          <Form.Control placeholder="Mobile" />
                          {/* <Form.Control placeholder="Last Name" /> */}
                        </Form.Group>
                        <X color="red" size={40} className="fa-i-cursor " />
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="notes">notes here</Tab.Pane>
                    <Tab.Pane eventKey="classify">classify here</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <button
                  type="button"
                  className="btn btn-primary mb-3 d-flex align-items-center gap-2 fa-hand-pointer-o> "
                >
                  <Plus size={20} /> Add New Button
                </button>
              </Form>
            </Col>
            <Col xxl={3} lg={4}>
              <BlogAside />
            </Col>
          </Row>
        </Container>
      </SimpleBar>
    </div>
  );
};

export default NewPostBody;
