import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaBook } from "react-icons/fa";
import axios from "axios";

function Sidebar() {
  const [repos, setRepos] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const humanize = (str) => {
    return (
      str
        // replace hyphens with spaces
        .replace(/-/g, " ")
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
      setLoading(true);
      setError(null);
      try {
        const result = await axios.get(
          "https://api.github.com/users/jwt2706/repos"
        );
        const reposWithPages = result.data.filter(
          (repo) => repo.description && repo.description.includes("[s!]")
        );
        setRepos(reposWithPages);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // hide sidebar by default on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-0 left-0 m-4 z-20 text-white border border-white hover:bg-white hover:text-black font-bold px-2 py-1 rounded-md"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      <aside
        className={`fixed left-0 top-0 z-10 h-screen w-64 bg-gray-800 bg-opacity-90 sm:bg-opacity-50 text-white p-6 transition-all duration-500 shadow-lg ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <br />
        <h2 className="text-2xl my-4 text-center">My Projects</h2>
        {loading ? (
          <p>Fetching repos...</p>
        ) : error ? (
          <p>There was a problem fetching the repos... D:</p>
        ) : (
          <ul className="list-none list-inside">
            {repos.map((repo) => (
              <li
                key={repo.id}
                className="mb-2 px-4 py-3 hover:bg-gray-700 rounded border border-gray-500 border-opacity-50"
              >
                <span className="block text-left mb-2">
                  {humanize(repo.name)}
                </span>
                <div className="flex space-x-2">
                  {repo.has_pages && (
                    <a
                      href={`https://jwt2706.github.io/${repo.name}`}
                      className="text-blue-400 transition-transform duration-200 transform hover:scale-150"
                      title="Go to project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  <a
                    href={`https://github.com/jwt2706/${repo.name}/blob/master/README.md`}
                    className="text-blue-400 transition-transform duration-200 transform hover:scale-150"
                    title="Go to README"
                  >
                    <FaBook />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;
