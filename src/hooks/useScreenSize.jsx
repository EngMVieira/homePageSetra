import { useContext } from "react";
import { ScreenSizeContext } from "../contexts/screen_context";

export default function useScreenSize(){
    
    const useScreenSize = () => useContext(ScreenSizeContext);
    const { screenSize } = useScreenSize();

    return screenSize
}