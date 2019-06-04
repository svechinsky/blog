// @flow
import React from "react";
import classNames from "classnames/bind";
import { Link } from "gatsby";
import { PAGINATION } from "../../constants";
import {
  Pagination as StyledPagination,
  PaginationPrev,
  PaginationNext,
  PaginationLink
} from "./PaginationStyled.jsx";

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {
  return (
    <StyledPagination>
      <PaginationPrev>
        <PaginationLink disabled={!hasPrevPage} rel="prev" to={prevPagePath}>
          {PAGINATION.PREV_PAGE}
        </PaginationLink>
      </PaginationPrev>
      <PaginationNext>
        <Link rel="next" to={nextPagePath} disabled={!hasNextPage}>
          {PAGINATION.NEXT_PAGE}
        </Link>
      </PaginationNext>
    </StyledPagination>
  );
};

export default Pagination;
