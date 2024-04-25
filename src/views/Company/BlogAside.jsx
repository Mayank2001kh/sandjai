import React, { useState } from "react";
import { Button, Card, Form, Nav, Tab } from "react-bootstrap";
import { ChevronDown, Plus } from "react-feather";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import HkTags from "../../components/@hk-tags/@hk-tags";
import HkDropZone from "../../components/@hk-drop-zone/HkDropZone";

const BlogAside = () => {
  const [startDate, setStartDate] = useState(new Date());
  const multiSelectOpt = [
    { value: "collaborator", label: "Collaborator" },
    { value: "designer", label: "Designer" },
    { value: "react-developer", label: "React Developer" },
  ];

  return (
    <div className="content-aside">
      <Card className="card-border overflow-hidden">
        <Card.Header className="card-header-action">
          <Link
            to="#"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#prev_1"
            aria-expanded="true"
          >
            <div className="d-flex align-items-center">
              <h6 className="me-2 mb-0">Preview Image</h6>
              <Button
                variant="light"
                size="xs"
                className="btn-icon btn-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-original-title="Add Category"
              >
                <span className="icon">
                  <span className="feather-icon">
                    <Plus />
                  </span>
                </span>
              </Button>
            </div>
          </Link>
          <div className="card-action-wrap">
            <Button
              variant="flush-dark"
              className="btn-icon btn-rounded flush-soft-hover"
              data-bs-toggle="collapse"
              aria-expanded="true"
              href="#prev_1"
            >
              <span className="icon">
                <span className="feather-icon">
                  <ChevronDown />
                </span>
              </span>
            </Button>
          </div>
        </Card.Header>
        <div id="prev_1" className="collapse show">
          <Card.Body>
            <HkDropZone>
              <span className="main-text">Upload a high quality image to</span>
              <div className="fw-light text-muted">
                {" "}
                Make your blog post inviting
              </div>
            </HkDropZone>
          </Card.Body>
        </div>
      </Card>
      <Button variant="outline-secondary" className="btn-block" disabled>
        Cancel
      </Button>
      <Button variant="primary" className="btn-block mb-3">
        Save
      </Button>
    </div>
  );
};

export default BlogAside;
