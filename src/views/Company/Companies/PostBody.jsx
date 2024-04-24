import React from "react";
import { Form, Nav, Tab } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import PostsTable from "./PostsTable";
import { ArrowDown, ArrowUp, X } from "react-feather";

const PostBody = () => {
  return (
    <div className="blog-body">
      <SimpleBar className="nicescroll-bar">
        <div className="d-flex shadow p-3 rounded gap-4 mb-3">
          <img
            className="w-20 rounded"
            src="https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos.jpg"
            alt=""
          />
          <div>
            <h2>Lets do international business BV</h2>

            <div className="d-flex gap-4 p-2">
              <div className="d-flex  flex-column justify-content-center shadow p-2 rounded w-50">
                <div className="d-flex align-items-center gap-1">
                  <ArrowUp size={20} color="green" />
                  <div className="fs-4 fw-bold">$ 4,500</div>
                </div>
                <div className="opacity-50">Earnings</div>
              </div>
              <div className="d-flex  flex-column justify-content-center shadow p-2 rounded w-50">
                <div className="d-flex align-items-center gap-1">
                  <ArrowDown size={20} color="red" />
                  <div className="fs-4 fw-bold">60</div>
                </div>
                <div className="opacity-50">Projects</div>
              </div>
              <div className="d-flex  flex-column justify-content-center shadow p-2 rounded w-50">
                <div className="d-flex align-items-center gap-1">
                  <ArrowUp size={20} color="green" />
                  <div className="fs-4 fw-bold">60 %</div>
                </div>
                <div className="opacity-50">Sucess Rate</div>
              </div>
            </div>
          </div>
        </div>
        <Tab.Container defaultActiveKey="Summary">
          <Nav
            variant="tabs"
            className="nav-line nav-icon nav-light border-bottom"
          >
            <Nav.Item>
              <Nav.Link eventKey="Summary">
                <span className="nav-link-text">Summary</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Activity">
                <span className="nav-link-text">Activity</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Notes">
                <span className="nav-link-text">Notes</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Email">
                <span className="nav-link-text">Email</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Calls">
                <span className="nav-link-text">Calls</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Tasks">
                <span className="nav-link-text">Tasks</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Schedule">
                <span className="nav-link-text">Schedule</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Sales">
                <span className="nav-link-text">Sales</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane className="d-flex gap-3 " eventKey="Summary">
              <div className="shadow p-2 w-30 ">
                <h4>Details</h4>
                <div className="d-flex justify-content-between align-items-center w-75">
                  <div>status</div>
                  <button type="button" className="btn btn-primary ">
                    Active
                  </button>
                </div>
                <div>link here</div>
                <div>Vat Number : 123123</div>
              </div>
              <div className="shadow p-2 w-30 ">
                <h4>Address</h4>
                <div className="d-flex justify-content-between align-items-center w-75">
                  <div>Address</div>
                </div>
              </div>
              <div className="shadow p-2 w-30 ">
                <h4>Contacts</h4>
                <div className="d-flex flex-column justify-content-between fs-8  w-75">
                  <div className="text-blue">Name</div>
                  <div>123-123-1234</div>
                  <div>email@here.com</div>
                </div>
              </div>
              <div className="shadow p-2 w-30 ">
                <h4>Standing</h4>
                <div className="d-flex justify-content-between align-items-center fs-7">
                  <div className="fw-bold">Paid to Date</div>
                  <div>$ 3,456.00</div>
                </div>
                <div className="d-flex justify-content-between align-items-center fs-7">
                  <div className="fw-bold">Outstanding</div>
                  <div>$ 0.00</div>
                </div>
                <div className="d-flex justify-content-between align-items-center fs-7">
                  <div className="fw-bold">Credit Balance</div>
                  <div>$ 0.00</div>
                </div>
              </div>
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
      </SimpleBar>
    </div>
  );
};

export default PostBody;
