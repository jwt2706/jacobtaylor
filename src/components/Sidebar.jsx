import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaBook } from "react-icons/fa";

function Sidebar() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(window.innerWidth > 640);

  const externalRepos = [
    "FRC2706/MergeData",
    "read-me-35/read-me-35.github.io",
  ];

  const huggingfaceRepos = [
    {
      name: "Food Classification 86M",
      repo: "jwt2706/google-vit-base-patch16-224-in21k-finetuned-food-classification-86M-v0.1",
    },
  ];

  useEffect(() => {
    const fetchData = async (repo) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        setError(error);
      }
    };
  
    const fetchUserRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/jwt2706/repos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.filter((repo) => repo.description && repo.description.includes("[s!]"));
      } catch (error) {
        setError(error);
      }
    };

    const fetchAllRepos = async () => {
      setLoading(true);
      try {
        const userRepos = await fetchUserRepos();
        const externalReposData = await Promise.all(
          externalRepos.map(fetchData)
        );
        return [...userRepos, ...externalReposData];
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRepos().then((repos) => {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setRepos(repos);
    });
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
        className={`fixed left-0 top-0 z-10 h-screen w-64 bg-gray-800 bg-opacity-90 sm:bg-opacity-50 text-white p-6 transition-all duration-500 shadow-lg overflow-y-auto ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <br />
        <h2 className="text-2xl my-4 text-center">Featured Projects</h2>
        {loading ? (
          <p>Fetching repos...</p>
        ) : error ? (
          <p>There was a problem fetching the repos... D:</p>
        ) : (
          <>
            <ul className="list-none list-inside">
              {repos.map((repo) => (
                <li
                  key={repo.id}
                  className="mb-2 px-4 py-3 hover:bg-gray-700 rounded border border-gray-500 border-opacity-50"
                  title={repo.description.replace("[s!]", "")}
                >
                  <span className="block text-left mb-2">{repo.name}</span>
                  <div className="flex space-x-2">
                    {repo.has_pages && (
                      <a
                        href={
                          externalRepos.includes(
                            `${repo.owner.login}/${repo.name}`
                          )
                            ? `https://${repo.owner.login}.github.io/${repo.name}`
                            : `https://jwt2706.github.io/${repo.name}`
                        }
                        className="text-blue-400 transition-transform duration-200 transform hover:scale-150"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="External link to project"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    <a
                      href={`https://github.com/jwt2706/${repo.name}/blob/master/README.md`}
                      className="text-blue-400 transition-transform duration-200 transform hover:scale-150"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Go to README"
                      aria-label="External link to project documentation"
                    >
                      <FaBook />
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <hr className="my-4" />
            <h2 className="text-2xl my-4 text-center">Hugging Face</h2>
            <ul className="list-none list-inside">
              {huggingfaceRepos.map((repoObj) => (
                <li
                  key={repoObj.repo}
                  className="mb-2 px-4 py-3 hover:bg-gray-700 rounded border border-gray-500 border-opacity-50"
                >
                  <span className="block text-left mb-2">{repoObj.name}</span>
                  <a
                    href={`https://huggingface.co/${repoObj.repo}`}
                    className="text-blue-400 transition-transform duration-200 transform hover:scale-150"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="See model."
                    aria-label="External link to Hugging Face repository"
                  >
                    <FaBook />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;
