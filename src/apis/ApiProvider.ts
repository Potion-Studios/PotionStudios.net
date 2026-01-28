import axios from "axios";

const MODRINTH_URL: string = import.meta.env.VITE_MODRINTH_URL;

export const getModrinthDownloads:(slug: string) => Promise<number> = async (slug: string): Promise<number> => {
    return (await axios.get(`${MODRINTH_URL}/project/${slug}`)).data.downloads;
};