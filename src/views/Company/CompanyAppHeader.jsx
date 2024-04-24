import React from "react";
import classNames from "classnames";
import { Button, Dropdown } from "react-bootstrap";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Flag,
  Grid,
  MoreVertical,
  RefreshCw,
  Settings,
  Slash,
  Tag,
  Users,
} from "react-feather";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import HkTooltip from "../../components/@hk-tooltip/HkTooltip";
import { toggleTopNav } from "../../redux/action/Theme";

const CompanyAppHeader = ({
  topNavCollapsed,
  toggleTopNav,
  toggleSidebar,
  showSidebar,
}) => {
  const companiesRoute = useRouteMatch("/apps/company/companies");
  const addNewCompanyRoute = useRouteMatch("/apps/company/add-new-company");
  // const companyDetail = useRouteMatch("/apps/company/post-detail");

  return (
    <header className="blog-header">
      <div className="d-flex align-items-center">
        <Link to="#" className="blogapp-title link-dark">
          <h1>
            {companiesRoute && "Companies"}
            {addNewCompanyRoute && "Add New Company"}
            {/* {postDetail && "Edit Company Details"} */}
          </h1>
        </Link>
        {/* {postDetail && (
          <Link to="add-new-post" className="btn btn-soft-primary ms-3">
            Add new
          </Link>
        )} */}
      </div>
      <div className="blog-options-wrap">
        {/* <h1>Add a Company</h1> */}
        {companiesRoute && (
          <>
            <Dropdown as="a">
              <Dropdown.Toggle
                variant="outline-light"
                className="d-sm-inline-block d-none"
              >
                Manage
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item>
                  <span className="feather-icon dropdown-icon">
                    <Flag />
                  </span>
                  <span>Manage Post</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className="feather-icon dropdown-icon">
                    <Grid />
                  </span>
                  <span>Manage Categories</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span className="feather-icon dropdown-icon">
                    <Tag />
                  </span>
                  <span>Manage Tags</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              as="a"
              variant="flush-dark"
              className="btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0 d-lg-inline-block d-none"
              href="#"
            >
              <HkTooltip placement="top" title="Refresh">
                <span className="icon">
                  <span className="feather-icon">
                    <RefreshCw />
                  </span>
                </span>
              </HkTooltip>
            </Button>
            <div className="v-separator  d-lg-inline-block d-none" />
          </>
        )}
        <Dropdown>
          <Dropdown.Toggle
            as="a"
            className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret flex-shrink-0  ms-0"
          >
            <span className="icon">
              <span className="feather-icon">
                <MoreVertical />
              </span>
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item>
              <span className="feather-icon dropdown-icon">
                <Users />
              </span>
              <span>Posts</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="feather-icon dropdown-icon">
                <Settings />
              </span>
              <span>Settings</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="feather-icon dropdown-icon">
                <Slash />
              </span>
              <span>Block Content</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <span className="feather-icon dropdown-icon">
                <ExternalLink />
              </span>
              <span>Feedback</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          as="a"
          variant="flush-dark"
          className="btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none"
          onClick={() => toggleTopNav(!topNavCollapsed)}
        >
          <HkTooltip
            placement={topNavCollapsed ? "bottom" : "top"}
            title="Collapse"
          >
            <span className="icon">
              <span className="feather-icon">
                {topNavCollapsed ? <ChevronDown /> : <ChevronUp />}
              </span>
            </span>
          </HkTooltip>
        </Button>
      </div>
      <div
        className={classNames("hk-sidebar-togglable", { active: !showSidebar })}
        onClick={toggleSidebar}
      />
    </header>
  );
};

const mapStateToProps = ({ theme }) => {
  const { topNavCollapsed } = theme;
  return { topNavCollapsed };
};

export default connect(mapStateToProps, { toggleTopNav })(CompanyAppHeader);
