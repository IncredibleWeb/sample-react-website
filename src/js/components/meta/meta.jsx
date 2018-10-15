import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Meta = ({ meta, url }) => {
  let ogImage = <meta property="og:image" content="/img/logo.jpg" />;

  let imageSrc = <link rel="image_src" href="/img/logo.jpg" />;

  if (meta.thumbnail) {
    ogImage = <meta property="og:image" content={meta.thumbnail} />;
    imageSrc = <link rel="image_src" href={meta.thumbnail} />;
  }
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:title" content={meta.title} />
      <link rel="canonical" value={url} />
      {ogImage}
      {imageSrc}
      <meta name="theme-color" content="#889cac" />
      <link rel="manifest" href="/manifest.json" />
      <link href="/favicon.ico?a41f" rel="shortcut icon" type="image/x-icon" />
      <link rel="icon" sizes="192x192" href="/img/icons/192.png" />
    </Helmet>
  );
};

Meta.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    thumbnail: PropTypes.string
  }).isRequired,
  url: PropTypes.string
};

export default Meta;
