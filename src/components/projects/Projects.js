import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { projectsData } from '../../data/data';

const Project = ({ project }) => {
  const { title, subtitle, description, tags, url, repo, image } = project;

  const data = useStaticQuery(graphql`
    {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                quality: 90
                placeholder: BLURRED
                formats: [WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const gatsbyImg = data.images.edges.find((edge) =>
    edge.node.relativePath.includes(image.filename)
  );
  const imagee = gatsbyImg.node.childImageSharp.gatsbyImageData;
  console.log(gatsbyImg.node.childImageSharp.gatsbyImageData);
  return (
    <div className="Project">
      <div className="Project__info">
        <h3 className="Project__info__title">
          {title}{' '}
          <span className="Project__info__title--subtitle">{subtitle}</span>
        </h3>
        <p className="Project__info__description">{description}</p>
        <ul className="Project__info__tags">
          {tags &&
            tags.map((tag) => (
              <li className="Project__info__tags__item" key={tag}>
                {tag}
              </li>
            ))}
        </ul>
        <div className="Project__info__links">
          <a
            className="Project__info__links__link Project__info__links__link--primary"
            href={url}
          >
            View live
          </a>
          {repo && (
            <a
              className="Project__info__links__link Project__info__links__link--default"
              href={repo}
            >
              View code
            </a>
          )}
        </div>
      </div>
      <div className="Project__picture">
        <GatsbyImage image={imagee} alt={image.alt} />
        {/* <img src="https://via.placeholder.com/393x208.png" alt="" /> */}
      </div>
    </div>
  );
};

function Projects() {
  return (
    <section className="Projects">
      <div className="container">
        <h2 className="Projects__title">Projects</h2>
        <div className="Projects__content">
          {projectsData.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
