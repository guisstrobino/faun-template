import React from "react";

import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import NewestVideo from "../components/NewestVideo";
import HireUs from "../components/HireUs";
import Footer from "../components/Footer";
import Playlists from "../components/Playlists";

export default function Home() {
    return (
        <>
            <Header pagination={true} />
            <AboutUs />
            <NewestVideo />
            <Playlists />
            <HireUs title="WANT TO HIRE US?" />
            <Footer />
        </>
    );
}
