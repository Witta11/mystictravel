import { GatsbyNode } from 'gatsby';
import path from 'path';



interface BlogPost {
  id: string;
  title: string;
  slug: string;
  relatedBlogs?: BlogPost[];
}

interface QueryResult {
  allContentfulBlogPost: {
    nodes: BlogPost[];
  };
}

export interface BlogPostPageContext {
  id:string;
  blog: BlogPost;
}

interface PageOptions {
  path: string;
  component: string;
  context: BlogPostPageContext;
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<QueryResult>(`
    query GetBlogPosts {
      allContentfulBlogPost {
        nodes {
          id
          title
          slug
  
          relatedBlogs {
            id
            title
            slug
    
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    throw new Error('Error querying for blog posts or no data returned');
  }

  const blogTemplate = path.resolve(`src/templates/blog.tsx`);

  result.data.allContentfulBlogPost.nodes.forEach((blogPost) => {
    const pageOptions: PageOptions = {
      path: `/${blogPost.slug}/`,
      component: blogTemplate,
      context: {
        id: blogPost.id,
        blog: blogPost,
      },
    };

    createPage(pageOptions);
  });
};
