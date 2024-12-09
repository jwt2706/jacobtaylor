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
        cardsRef.current.forEach((card, index) => {
            const fromDirection = index % 2 === 0 ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };
            gsap.fromTo(card,
                fromDirection,
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none none"
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
                        <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo bg-white bg-opacity-10 backdrop-blur-lg border border-gray-300 rounded-lg p-6 shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out hover:opacity-100 block" ref={el => cardsRef.current[index] = el!}>
                            <div className="flex justify-between items-start ">
                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {repo.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">Built with: {languages[repo.id]?.join(", ") || "Loading..."}</p>
                                    <br />
                                    <p>{repo.description}</p>
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
            )}
        </div>
    );
};

export default ProjectFetcher;