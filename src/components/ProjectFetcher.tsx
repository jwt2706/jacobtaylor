import React, { useEffect, useState } from "react";

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    languages_url: string;
    created_at: string;
}

const ProjectFetcher: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [languages, setLanguages] = useState<{ [key: number]: string[] }>({});

    useEffect(() => {
        fetch("https://api.github.com/users/jwt2706/repos")
            .then((response) => response.json())
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
            })
            .catch((error) => console.error("Error fetching repos:", error));
    }, []);

    return (
        <div>
            <h2>My GitHub Repositories</h2>
            <div>
                {repos.map((repo) => (
                    <div key={repo.id} className="repo">
                        <h3>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </h3>
                        <p>{repo.description}</p>
                        {repo.homepage && (
                            <p>
                                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                        )}
                        <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
                        <p>Languages: {languages[repo.id]?.join(", ") || "Loading..."}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFetcher;