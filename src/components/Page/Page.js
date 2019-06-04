import React, { useRef, useEffect } from "react";
import { Page, PageInner, PageTitle, PageBody } from "./PageStyled";

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <Page ref={pageRef}>
      <PageInner>
        {title && <PageTitle>{title}</PageTitle>}
        <PageBody>{children}</PageBody>
      </PageInner>
    </Page>
  );
};

export default Page;
