import React from 'react';
import { Fade } from 'react-reveal';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
        <Fade bottom>
          <h3 className="Project__info__title">
            {title}{' '}
            <span className="Project__info__title--subtitle">{subtitle}</span>
          </h3>
          <p className="Project__info__description">{description}</p>
          <ul className="Project__info__tags">
            {tags &&
              tags.map((tag) => (
                <Fade bottom key={tag}>
                  <li className="Project__info__tags__item">{tag}</li>
                </Fade>
              ))}
          </ul>
        </Fade>
        <Fade bottom>
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
        </Fade>
      </div>
      <Fade bottom>
        <div className="Project__picture">
          <GatsbyImage image={imagee} alt={image.alt} />
        </div>
      </Fade>
    </div>
  );
};

function Projects() {
  return (
    <section className="Projects">
      <div className="container">
        <Fade bottom>
          <h2 className="Projects__title">Projects</h2>
        </Fade>
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
