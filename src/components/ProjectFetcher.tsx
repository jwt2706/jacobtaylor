import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Logos from "./Logos";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    homepage: string;
    languages_url: string;
    created_at: string;
}

const ProjectFetcher: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [languages, setLanguages] = useState<{ [key: number]: string[] }>({});
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/jwt2706/repos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const filteredRepos = data
                    .filter((repo: Repo) => repo.description && repo.description.includes("[!website]"))
                    .map((repo: Repo) => ({
                        ...repo,
                        description: repo.description.replace("[!website]", "").trim(),
                    }))
                    .sort((a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

                setRepos(filteredRepos);

                filteredRepos.forEach((repo: Repo) => {
                    fetch(repo.languages_url)
                        .then((response) => response.json())
                        .then((langData) => {
                            setLanguages((prev) => ({
                                ...prev,
                                [repo.id]: Object.keys(langData),
                            }));
                        });
                });

                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching repos:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col items-center">
            {loading ? (
                <p className="text-blue-500">Loading...</p>
            ) : error ? (
                <div className="text-red-500 text-justify bg-gray-800 bg-opacity-75 p-4 rounded-md">
                    <p className="mb-2">{error}</p>
                    Sorry... There was a problem fetching the repositories from GitHub. Try refreshing the page or visit my <a href="https://github.com/jwt2706" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">GitHub</a> for more projects.
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-8 w-full max-w-4xl px-4">
                        {repos.map((repo, index) => (
                            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo bg-white bg-opacity-10 backdrop-blur-lg border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out hover:opacity-100 block" ref={el => cardsRef.current[index] = el!}>
                                <div className="flex justify-between items-start ">
                                    <div>
                                        <h3 className="text-md min-[400px]:text-2xl font-semibold">
                                            {repo.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">Built with: {languages[repo.id]?.join(", ") || "Loading..."}</p>
                                        <p className="text-left mt-4 text-sm min-[400px]:text-lg">{repo.description}</p>
                                    </div>
                                    <div className="flex gap-2 text-2xl">
                                        <FaGithub className="hover:scale-125 transition-transform duration-300 ease-in-out" />
                                        {repo.homepage && (
                                            <FaExternalLinkAlt className="hover:scale-125 transition-transform duration-300 ease-in-out" />
                                        )}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    {repos.length > 0 && (
                        <div className="py-4">
                            <h3 className="text-center text-lg sm:text-xl font-semibold pt-8 pb-4">See more of my projects or reach out:</h3>
                            <Logos />
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ProjectFetcher;