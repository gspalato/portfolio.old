import React, { createContext, useContext, useState } from 'react';

type ProjectsContextType = {
	projects: Project[];
	fetchProjects: () => Promise<Project[]>;
	success: boolean;
	loading: boolean;
};

export const ProjectsContext = createContext<ProjectsContextType>(
	{} as ProjectsContextType,
);

export const useProjects = () => useContext(ProjectsContext);

type ProjectsProviderProps = {} & React.PropsWithChildren;

export const ProjectsProvider: React.FC<ProjectsProviderProps> = (props) => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [success, setSuccess] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchProjects = async () => {
		setLoading(true);

		const baseUrl =
			import.meta.env.VITE_ETHER_URL ??
			'https://foundation.unreal.sh/portfolio/';

		if (!baseUrl || baseUrl?.length === 0) {
			console.error(
				"Ether's API URL is not set. Couldn't fetch projects.",
			);
			setLoading(false);
			return;
		}

		const url = new URL('projects', baseUrl);

		try {
			const res = await fetch(url.toString());

			if (!res.ok) {
				console.error(
					`Couldn't fetch projects. Status: ${res.status}.`,
				);
				setLoading(false);
				return;
			}

			const data = await res.json();
			if (!data) {
				console.error('No data was returned while fetching projects.');
				setLoading(false);
				return;
			}

			setProjects(data);
			setSuccess(true);
			setLoading(false);

			return data;
		} catch (error) {
			console.error('An error occurred while fetching projects.', error);
			setLoading(false);
		}
	};

	const value = {
		projects,
		fetchProjects,
		success,
		loading,
	};

	return (
		<ProjectsContext.Provider value={value}>
			{props.children}
		</ProjectsContext.Provider>
	);
};
