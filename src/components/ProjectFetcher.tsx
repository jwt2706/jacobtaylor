import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            gsap.fromTo(card,
                { opacity: 0.5 },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });
    }, [repos]);

    return (
        <div className="flex flex-col items-center">
            {loading ? (
                <p className="text-blue-500">Loading...</p>
            ) : error ? (
                <p className="text-red-500 text-justify">
                    {error}
                    <br />
                    Sorry... There was a problem fetching the repositories from GitHub. Try refreshing the page. If that doesn't work you can see them by clicking <a href="https://github.com/jwt2706" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">here</a>, or visiting some of my links above.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-8 w-full max-w-4xl px-4">
                    {repos.map((repo, index) => (
                        <div key={repo.id} className="repo bg-white bg-opacity-10 backdrop-blur-lg border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out hover:opacity-100" ref={el => cardsRef.current[index] = el!}>
                            <h3 className="text-3xl font-semibold text-center">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {repo.name}
                                </a>
                            </h3>
                            <p className="text-sm text-center mb-4">{languages[repo.id]?.join(", ") || "Loading..."}</p>
                            <p className="text-center mb-4">{repo.description}</p>
                            <div className="repo-links flex justify-center gap-4 mb-4">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-2xl transition-transform transform hover:scale-125 duration-300 ease-in-out">
                                    <FaGithub />
                                </a>
                                {repo.homepage && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-2xl transition-transform transform hover:scale-125 duration-300 ease-in-out">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectFetcher;