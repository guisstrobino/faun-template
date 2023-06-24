import axios from "axios";
import querystring from "querystring";

const getClientCredentials = async () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
        "base64"
    );

    const { data } = await axios.post(
        "https://accounts.spotify.com/api/token",
        querystring.stringify({ grant_type: "client_credentials" }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${basicAuth}`,
            },
        }
    );

    return data.access_token;
};

export default getClientCredentials;
