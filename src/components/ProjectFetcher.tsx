// ProjectFetcher.tsx
import React, { useEffect, useState } from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
}

const ProjectFetcher: React.FC<{ onProjectsFetched: (projects: Project[]) => void }> = ({ onProjectsFetched }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/jwt2706/repos');
                const repos = await response.json();
                const projects = repos
                    .filter((repo: any) => repo.description && repo.description.includes('[s!]'))
                    .map((repo: any) => ({
                        title: repo.name,
                        description: repo.description,
                        link: repo.html_url,
                    }));
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
