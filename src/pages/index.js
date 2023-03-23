import React from "react";
import { CSSReset } from "../components/CSSReset/CSSReset";

import Header from "../components/Header/Header";
import User from "../components/User/User";
import Timeline from "../components/TimeLine/Timeline";
import Banner from "../components/Banner/Banner";

import config from "../../config.json";
import Head from "next/head";

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
            <Banner/>
            <User />
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>                  
            
            </div>
        </>
    );
}

export default HomePage