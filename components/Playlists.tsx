import { useEffect, useState } from "react";
import axios from "axios";
import getClientCredentials from "../utils/spotifyAuth";

import PlaylistCarousel from "./PlaylistCarousel";

interface Playlist {
    id: string;
    name: string;
    description: string;
    images: { url: string }[];
}

export default function Playlists() {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        const getPlaylists = async () => {
            const token = await getClientCredentials();
            const { data } = await axios.get<{ items: Playlist[] }>(
                "https://api.spotify.com/v1/users/spotify/playlists",
                {
                    headers: { Authorization: `Bearer ${token}` },
                    params: { limit: 10 },
                }
            );
            setPlaylists(data.items);
        };

        getPlaylists();
    }, []);

    return (
        <div className="relative">
            <PlaylistCarousel items={playlists} />
        </div>
    );
}
