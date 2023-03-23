import React from "react";
import { CSSReset } from "../components/CSSReset/CSSReset";

import Header from "../components/Header/Header";
import User from "../components/User/User";
import Timeline from "../components/TimeLine/Timeline";
import Banner from "../components/Banner/Banner";

import config from "../../config.json";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
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