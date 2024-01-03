import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogTemplate = ({ data }) => {
  const { title, content } = data.contentfulBlogPost || { title: '', content: {} };

  console.log('content is', data);

  // Use content.raw directly
  const rawContent = content?.raw || '';

  // Parse the raw JSON structure
  const parsedContent = JSON.parse(rawContent);

  // Convert the Rich Text JSON structure into HTML
  const htmlContent = convertRichTextToHtml(parsedContent);

  return (
    <article className="blog-post">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Link to="/">Go back to the homepage</Link>
    </article>
  );
};

// Helper function to convert Rich Text JSON to HTML
function convertRichTextToHtml(json) {
  if (!json) {
    return '';
  }

  const renderNode = {
    'embedded-asset-block': node => {
      return `<img src="${node.data.target.fields.file['en-US'].url}" alt="${node.data.target.fields.description['en-US']}" />`;
    },
    // Add other node types as needed
  };

  return jsonToHtml(json, renderNode);
}

// Helper function to recursively convert JSON to HTML
function jsonToHtml(json, renderNode) {
  if (Array.isArray(json.content)) {
    return json.content.map(node => jsonToHtml(node, renderNode)).join('');
  }

  if (json.nodeType === 'text') {
    return json.value;
  }

  if (renderNode[json.nodeType]) {
    return renderNode[json.nodeType](json);
  }

  return '';
}

export default BlogTemplate;

// Define the page query to get the blog post data
export const query = graphql`
  query BlogPostBySlug($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      content {
        raw
      }
    }
  }
`;
