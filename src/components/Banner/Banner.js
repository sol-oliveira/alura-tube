import Image from "next/image";
import ImgBanner from "../../assets/img/capa.jpg";
import { StyledBanner } from "./StyledBanner";

export default function Banner() {
    return(
        <StyledBanner>
            <Image 
                src={ImgBanner} 
                quality={100}  
                alt="banner"                
                height={500}
                 />
        </StyledBanner>
    )

}