import styled from "styled-components";
import { Link } from "gatsby";

export const FeedItem = styled.div`
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0.5rem;
  }
`;

export const FeedItemTitle = styled.h2`
  font-size: 1.6875rem;
  line-height: 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const FeedItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.base};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.base};
    border-bottom: 1px solid ${({ theme }) => theme.colors.base};
  }
`;

export const FeedItemDescription = styled.p`
  /* font-size: $typographic-base-font-size; */
  /* @include line-height(1); */
  margin-bottom: 0.75rem;
`;

export const FeedItemMetaTime = styled.time`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.base};
  font-weight: 600;
  text-transform: uppercase;
`;

export const FeedItemMetaDivider = styled.span`
  margin: 0 5px;
`;

export const FeedItemMetaCategoryLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FeedItemReadmore = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
