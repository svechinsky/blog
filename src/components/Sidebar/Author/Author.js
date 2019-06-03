// @flow
import React from "react";
import { withPrefix, Link } from "gatsby";
import { AuthorPhoto, AuthorTitle, AuthorSubtitle, AuthorLink } from "./AuthorStyled.jsx";

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div>
    <AuthorLink to="/">
      <AuthorPhoto
        src={withPrefix(author.photo)}
        width="75"
        height="75"
        alt={author.name}
      />
    </AuthorLink>

    {isIndex ? (
      <AuthorTitle>
        <AuthorLink to="/">{author.name}</AuthorLink>
      </AuthorTitle>
    ) : (
      <AuthorTitle>
        <AuthorLink to="/">{author.name}</AuthorLink>
      </AuthorTitle>
    )}
    <AuthorSubtitle>{author.bio}</AuthorSubtitle>
  </div>
);

export default Author;
