import React from "react";
// import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import Image from "next/image";
import PropTypes from "prop-types";
import remarkGfm from "remark-gfm";
import { createRoot } from "react-dom/client";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

function textToStyle(inputString) {
  if (!inputString.includes(",")) {
    return { style: {}, text: inputString };
  }
  // Split the inputString by the first comma (,) to separate width and height
  const [widthHeightPart, text] = inputString.split(" ");

  // Split the widthHeightPart by space to get width and height as separate strings
  const [widthStr, heightStr] = widthHeightPart.split(",");

  // Convert width and height to numbers
  const width = widthStr;
  const height = heightStr;

  // Return an object with the extracted values
  let result = { style: {} };
  if (width) {
    result.style.width = !isNaN(parseInt(width)) ? parseInt(width) : width;
  }
  if (height) {
    result.style.height = !isNaN(parseInt(height)) ? parseInt(height) : height;
  }
  if (text) {
    result.text = text;
  }
  console.log(result);
  return result;
}

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  img({ alt, src, title }) {
    const style = textToStyle(alt).style;
    if (alt.includes("youtube")) {
      return <YoutubeEmbed embedId={src} />;
    } else if (alt.includes("video")) {
      return <video src={src} controls></video>;
    } else {
      return (
        <img
          alt={textToStyle(alt).text}
          src={src}
          title={title}
          style={style}
        />
      );
    }
  },
};

const ContentSection = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={CodeBlock}
      className="markdown-class"
      skipHtml={true}
    >
      {content}
    </ReactMarkdown>
  );
};

export default ContentSection;
