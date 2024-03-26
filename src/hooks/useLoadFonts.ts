import { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [windowLoaded, setWindowLoaded] = useState<boolean>(false);

  //  loading fonts
  const fontFamilies = [
    "MetropolisLight",
    "MetropolisRegular",
    "MetropolisMedium",
    "MetropolisSemiBold",
    "MetropolisBold",
    "MetropolisExtraBold",
    "MetropolisThin",
    "Durer",
    "Poiret",
  ];

  const loadFonts = async () => {
    const fontPromises = fontFamilies.map((fontFamily) => {
      const observer = new FontFaceObserver(fontFamily);
      return observer.load();
    });
    try {
      await Promise.all(fontPromises);
      setFontsLoaded(true);
    } catch (e) {
      console.log("Font loading failed!", e);
      setFontsLoaded(true);
    }
  };
  const handleWindowLoad = () => setWindowLoaded(true);
  useEffect(() => {
    void loadFonts();
    window.addEventListener("load", handleWindowLoad);
    if (document.readyState === "complete") {
      setWindowLoaded(true);
    }
    return () => window.removeEventListener("load", handleWindowLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { windowLoaded, fontsLoaded };
};

export default useLoadFonts;
