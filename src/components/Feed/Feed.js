// @flow
import React from "react";
import moment from "moment";
import type { Edges } from "../../types";
import {
  FeedItem,
  FeedItemLink,
  FeedItemMetaTime,
  FeedItemMetaDivider,
  FeedItemTitle,
  FeedItemMetaCategoryLink,
  FeedItemDescription,
  FeedItemReadmore
} from "./FeedStyled.jsx";

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div>
    {edges.map(edge => (
      <FeedItem key={edge.node.fields.slug}>
        <div>
          <FeedItemMetaTime
            dateTime={moment(edge.node.frontmatter.date).format("MMMM D, YYYY")}
          >
            {moment(edge.node.frontmatter.date).format("MMMM YYYY")}
          </FeedItemMetaTime>
          <FeedItemMetaDivider />
          <span>
            <FeedItemMetaCategoryLink to={edge.node.fields.categorySlug}>
              {edge.node.frontmatter.category}
            </FeedItemMetaCategoryLink>
          </span>
        </div>
        <FeedItemTitle>
          <FeedItemLink to={edge.node.fields.slug}>
            {edge.node.frontmatter.title}
          </FeedItemLink>
        </FeedItemTitle>
        <FeedItemDescription>
          {edge.node.frontmatter.description}
        </FeedItemDescription>
        <FeedItemReadmore to={edge.node.fields.slug}>Read</FeedItemReadmore>
      </FeedItem>
    ))}
  </div>
);

export default Feed;
