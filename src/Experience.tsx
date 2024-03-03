import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Komodo } from "./komodo";
import { LandingText } from "./Components/LandingText";

export const Experience = () =>{
    return(
        <>
            {/* <OrbitControls/> */}
            <ambientLight intensity={6}/>
            <ScrollControls pages = {6} damping={0.25}>
                <LandingText/>
                <Komodo/>
            </ScrollControls>
        </>
    )
}