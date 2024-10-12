// ProjectFetcher.tsx
import React, { useEffect, useState } from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
    githubPagesLink?: string;
    languages?: string[];
}

const ProjectFetcher: React.FC<{ onProjectsFetched: (projects: Project[]) => void }> = ({ onProjectsFetched }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const reposResponse = await fetch('https://api.github.com/users/jwt2706/repos');
                const repos = await reposResponse.json();

                const projectsPromises = repos
                    .filter((repo: any) => repo.description && repo.description.includes('[s!]'))
                    .map(async (repo: any) => {
                        // get the languages for the repository
                        const languagesResponse = await fetch(repo.languages_url);
                        const languagesData = await languagesResponse.json();
                        const languages = Object.keys(languagesData);

                        // github pages link, if it exists
                        const githubPagesLink = repo.homepage || `https://jwt2706.github.io/${repo.name}`;

                        return {
                            title: repo.name,
                            description: repo.description,
                            link: repo.html_url,
                            githubPagesLink: githubPagesLink || undefined,
                            languages: languages.length > 0 ? languages : undefined,
                        };
                    });

                const projects = await Promise.all(projectsPromises);
                onProjectsFetched(projects);
            } catch (err) {
                setError('Failed to fetch projects :(');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [onProjectsFetched]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return null;
};

export default ProjectFetcher;
