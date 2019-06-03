// @flow
import React from "react";
import Helmet from "react-helmet";
import type { Node as ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import styles from "./Layout.module.scss";
import theme from "../../theme/theme";

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({ children, title, description }: Props) => (
  <ThemeProvider theme={theme}>
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </div>
  </ThemeProvider>
);

export default Layout;
