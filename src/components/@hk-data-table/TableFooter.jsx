import React from "react";
import { Col, Pagination, Row } from "react-bootstrap";

const TableFooter = ({
  range,
  setPage,
  page,
  slice,
  totalRows,
  paginatorSize,
}) => {
  const handleNext = () => {
    if (slice.length > 1 && page !== range.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Row className="my-4">
      <Col>
        {slice.length} of {totalRows.length}
      </Col>
      <Col>
        <Pagination size="sm" className=" d-flex justify-content-end">
          <Pagination.Prev disabled={page === 1} onClick={handlePrev}>
            Previous
          </Pagination.Prev>
          {range.map((el, index) => (
            <Pagination.Item key={index} active={page === el}>
              {el}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={handleNext}
            disabled={page === range.length}
          >
            Next
          </Pagination.Next>
        </Pagination>
      </Col>
    </Row>
  );
};

export default TableFooter;
