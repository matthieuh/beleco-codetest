import React from "react";
import DefaultLayout from "./layouts/default";

const TrendingRepos = ({ repos = [] } = {}) => {
  return (
    <DefaultLayout>
      <h1>Github Trending Repositories</h1>
      <section className="repos">
        {repos.map(repo => (
          <a href={repo.html_url}>
            <article className="repo">
              <div className="repo-header">
                <h2>{repo.full_name} </h2>
                <div className="stars">
                  <span className="star">★</span> {repo.watchers_count}
                </div>
              </div>
              <p>{repo.description}</p>
              <i>{repo.html_url}</i>
            </article>
          </a>
        ))}
      </section>
    </DefaultLayout>
  );
};

module.exports = TrendingRepos;
