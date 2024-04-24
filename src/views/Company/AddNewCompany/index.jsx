import React, { useState } from "react";
import classNames from "classnames";
import BlogAppHeader from "../CompanyAppHeader";
import CompanyAppSidebar from "../CompanyAppSidebar";
import NewPostBody from "./NewPostBody";

const AddNewPost = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="hk-pg-body py-0">
      <div
        className={classNames("blogapp-wrap", {
          "blogapp-sidebar-toggle": !showSidebar,
        })}
      >
        <CompanyAppSidebar />
        <div className="blogapp-content">
          <div className="blogapp-detail-wrap">
            <BlogAppHeader
              toggleSidebar={() => setShowSidebar(!showSidebar)}
              showSidebar={showSidebar}
            />
            <NewPostBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
