import React from "react";
import Head from "next/head";

import Header from "../src/components/Header/Header";
import Banner from "../src/components/Banner/Banner";
import User from "../src/components/User/User";
import Timeline from "../src/components/TimeLine/Timeline";
import Favorites from "../src/components/Favorites/Favorites";

import config from "../config.json";
import { CSSReset } from "../assets/styles/CSSReset";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>  
            <Head>
                <link
                rel="icon"
                type="image/x-icon"
                href="https://icons.iconarchive.com/icons/dakirby309/simply-styled/128/YouTube-icon.png"
                />
                <title>AluraTube</title>
            </Head>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,                
            }}>
                
                <Header valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Banner />
                <User />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/> 
                <Favorites searchValue={valorDoFiltro} />                 
                
            </div>
        </>
    );
}

export default HomePage