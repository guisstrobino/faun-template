## Setting Up

First, create a file named `.env.local`

Then, set the Spotify variables as:

```bash
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=<YOUR_ID>
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=<YOUR_SECRET_ID>
```

## Getting Started

First, build the container:

```bash
docker build -t faun-music-template .
```

Then, run the container:

```bash
docker run -p 3000:3000 faun-music-template
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
