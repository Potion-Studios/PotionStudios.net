import axios from "axios";

export const getModrinthDownloads:(slug: string) => Promise<number> = async (slug: string): Promise<number> => {
    return (await axios.get(`https://api.modrinth.com/v2/project/${slug}`)).data.downloads;
};