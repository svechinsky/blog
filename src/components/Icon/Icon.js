// @flow
import React from "react";

import { Icon as StyledIcon } from "./IconStyled";

type Props = {
  icon: {
    viewBox?: string,
    path?: string
  }
};

const Icon = ({ icon }: Props) => (
  <StyledIcon viewBox={icon.viewBox}>
    <path d={icon.path} />
  </StyledIcon>
);

export default Icon;
