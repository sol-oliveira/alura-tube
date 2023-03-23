import Image from "next/image";
import { StyledUser } from "./StyledUser";
import config from "../../../config.json";

export default function User() {
    return (
        <>
        <StyledUser>
            
            <section className="user-info">
                
                <img className="user-image" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledUser>
        </>
    )
}