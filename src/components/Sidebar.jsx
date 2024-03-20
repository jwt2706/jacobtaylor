import React, { useEffect, useState } from "react";
import axios from "axios";
import GithubIcon from "../assets/icons/GithubIcon";

function Sidebar() {
  const [repos, setRepos] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const excludeRepos = ["jwt2706.github.io"];

  const humanize = (str) => {
    return (
      str
        // insert a space before all caps
        .replace(/([A-Z])/g, " $1")
        // uppercase the first character
        .replace(/^./, function (str) {
          return str.toUpperCase();
        })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.github.com/users/jwt2706/repos"
      );
      const reposWithPages = result.data.filter(
        (repo) => repo.has_pages && !excludeRepos.includes(repo.name)
      );
      setRepos(reposWithPages);
    };

    fetchData();
  }, []);

  return (
    <aside
      className={`absolute left-0 top-0 h-screen w-64 bg-gray-800 bg-opacity-50 text-white p-6 transition-all duration-500 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute top-0 right-0 m-4"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      <br />
      <h2 className="text-2xl mb-4">My Projects</h2>
      <ul className="list-disc list-inside">
        {repos.map((repo) => (
          <li key={repo.id} className="mb-2 flex justify-between items-center">
            <a
              href={`https://jwt2706.github.io/${repo.name}`}
              className="text-blue-400 hover:underline"
            >
              {humanize(repo.name)}
            </a>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <GithubIcon
                width="4"
                height="4"
                className="text-blue-400 hover:underline"
              />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
