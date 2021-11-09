import React from 'react';
import { projectsData } from '../../data/data';

const Project = ({ project }) => {
  const { title, subtitle, description, tags, url, repo, image } = project;
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
              <li className="Project__info__tags__item">{tag}</li>
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
        <img src="https://via.placeholder.com/393x208.png" alt="" />
      </div>
    </div>
  );
};

function Projects() {
  return (
    <section className="Projects">
      <h2 className="Projects__title">Projects</h2>
      <div className="Projects__content">
        {projectsData.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
