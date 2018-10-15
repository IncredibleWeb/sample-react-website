import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  PAGE_NUMBER_QUERY_STRING_PARAM,
  PAGE_SIZE_QUERY_STRING_PARAM
} from "../../containers/news/constants";

const ChangePageLink = ({
  pageNumber,
  pageSize,
  isCurrentPage,
  url,
  text,
  onClick
}) => {
  let fullUrl = `${url}?${PAGE_NUMBER_QUERY_STRING_PARAM}=${pageNumber}&${PAGE_SIZE_QUERY_STRING_PARAM}=${pageSize}`;
  return (
    <Link to={fullUrl} onClick={onClick} title={text}>
      {text}
    </Link>
  );
};

ChangePageLink.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isCurrentPage: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ChangePageLink;
