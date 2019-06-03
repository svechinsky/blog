import styled from "styled-components";
import { Link } from "gatsby";
export const AuthorPhoto = styled.img`
  display: inline-block;
  margin-bottom: 0;
  border-radius: 50%;
  background-clip: padding-box;
`;

export const AuthorTitle = styled.h2`
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1.125;
  margin: 0.5, 0, 0.5, 0;
`;
export const AuthorLink = styled(Link)`
  color: ${({ theme }) => theme.colors.base};

  &:hover,
  &:focus {
    color: $color-base;
  }
`;

export const AuthorSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1;
  margin-bottom: 1rem;
`;
