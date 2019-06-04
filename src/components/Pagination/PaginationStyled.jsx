import styled from "styled-components";
import "../../assets/scss/_variables.scss";
import "../../assets/scss/_mixins.scss";
import { Link } from "gatsby";

export const Pagination = styled.div`
  @include margin-top(2);
  display: flex;
`;
export const PaginationPrev = styled.div`
  width: 50%;
  text-align: left;
`;
export const PaginationLink = styled(Link)`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray : theme.colors.secondary};
  font-size: 26px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }

  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
`;
export const PaginationNext = styled.div`
  width: 50%;
  text-align: right;
`;
