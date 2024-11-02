import React, { useEffect, useState } from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
    githubPagesLink?: string;
    languages?: string[];
    createdAt: string;
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
                        const languagesResponse = await fetch(repo.languages_url);
                        const languagesData = await languagesResponse.json();
                        const languages = Object.keys(languagesData);

                        const githubPagesLink = repo.homepage || `https://jwt2706.github.io/${repo.name}`;

                        return {
                            title: repo.name,
                            description: repo.description,
                            link: repo.html_url,
                            githubPagesLink: githubPagesLink || undefined,
                            languages: languages.length > 0 ? languages : undefined,
                            createdAt: repo.created_at,
                        };
                    });

                const projects = await Promise.all(projectsPromises);
                projects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                onProjectsFetched(projects);
                

               /* const dummyProjects: Project[] = [
                    {
                        title: 'Project A',
                        description: 'Description for Project A',
                        link: 'https://example.com/project-a',
                        githubPagesLink: 'https://example.github.io/project-a',
                        languages: ['JavaScript', 'React'],
                        createdAt: '2023-01-01T00:00:00Z',
                    },
                    {
                        title: 'Project B',
                        description: 'Description for Project B',
                        link: 'https://example.com/project-b',
                        githubPagesLink: undefined,
                        languages: ['Python'],
                        createdAt: '2023-02-01T00:00:00Z',
                    },
                    {
                        title: 'Project C',
                        description: 'Description for Project C',
                        link: 'https://example.com/project-c',
                        githubPagesLink: 'https://example.github.io/project-c',
                        languages: ['Java', 'Spring'],
                        createdAt: '2023-03-01T00:00:00Z',
                    },
                    {
                        title: 'Project D',
                        description: 'Description for Project D',
                        link: 'https://example.com/project-d',
                        githubPagesLink: undefined,
                        languages: ['C#', 'ASP.NET'],
                        createdAt: '2023-04-01T00:00:00Z',
                    },
                    {
                        title: 'Project E',
                        description: 'Description for Project E',
                        link: 'https://example.com/project-e',
                        githubPagesLink: 'https://example.github.io/project-e',
                        languages: ['Ruby', 'Rails'],
                        createdAt: '2023-05-01T00:00:00Z',
                    },
                    {
                        title: 'Project F',
                        description: 'Description for Project F',
                        link: 'https://example.com/project-f',
                        githubPagesLink: 'https://example.github.io/project-f',
                        languages: ['Go'],
                        createdAt: '2023-06-01T00:00:00Z',
                    },
                    {
                        title: 'Project G',
                        description: 'Description for Project G',
                        link: 'https://example.com/project-g',
                        githubPagesLink: undefined,
                        languages: ['PHP', 'Laravel'],
                        createdAt: '2023-07-01T00:00:00Z',
                    },
                    {
                        title: 'Project H',
                        description: 'Description for Project H',
                        link: 'https://example.com/project-h',
                        githubPagesLink: 'https://example.github.io/project-h',
                        languages: ['Swift', 'iOS'],
                        createdAt: '2023-08-01T00:00:00Z',
                    },
                    {
                        title: 'Project I',
                        description: 'Description for Project I',
                        link: 'https://example.com/project-i',
                        githubPagesLink: undefined,
                        languages: ['Kotlin', 'Android'],
                        createdAt: '2023-09-01T00:00:00Z',
                    },
                    {
                        title: 'Project J',
                        description: 'Description for Project J',
                        link: 'https://example.com/project-j',
                        githubPagesLink: 'https://example.github.io/project-j',
                        languages: ['TypeScript', 'Node.js'],
                        createdAt: '2023-10-01T00:00:00Z',
                    },
                ];
                

                // Sort dummy projects by createdAt date
                dummyProjects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

                onProjectsFetched(dummyProjects);
                */
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
