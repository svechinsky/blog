import styled from "styled-components";

import "../../assets/scss/_variables.scss";
import "../../assets/scss/_mixins.scss";

export const Page = styled.div`
  @include margin-bottom(2);
  @include breakpoint-sm {
    lost-column: 7/12;
  }
  @include breakpoint-md {
    lost-column: 2/3;
  }
`;
export const PageInner = styled.div`
  padding: 25px 20px;
  @include breakpoint-sm {
    padding: 30px 20px;
  }
  @include breakpoint-md {
    padding: 40px 35px;
  }
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.base * 2.5};
  font-weight: 600;
  @include line-height(2);
  @include margin-top(0);
  @include margin-bottom(1.45);
`;

export const PageBody = styled.div`
  font-size: ${({ theme }) => theme.fonts.base * 2.5};
  @include line-height(1);
  @include margin(0, 0, 1);
`;
