import { Merged, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import { Keyboard3D } from "../components/Keyboard";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { useState } from "react";

const Hero = () => {
    const [keyPresses, setKeyPresses] = useState([]);

    const handleKeyPress = (keyId, label) => {
    const timestamp = new Date().toLocaleTimeString();
    setKeyPresses(prev => [
      { keyId, label: label || keyId, timestamp },
      ...prev.slice(0, 4) // Keep last 5 presses
    ]);
  };

    const isMobile = useMediaQuery( {maxWidth: 600})
    const isTablet = useMediaQuery( {minWidth: 601, maxWidth: 1100 })
    return(
        <section id="home" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Software Developer
                    {/* <span className="waving-hand">
                        👋🏻
                    </span> */}
                </p>
                <p className="hero_tag text-gray_gradient sm:mt-0 mt-15">Crafting Code. Ensuring Quality</p>
                <div className="flex flex-row gap-4 justify-center mt-15 sm:mt-4 z-9">
                    <a href="https://www.linkedin.com/in/logan-delaney-6744641aa" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin-brands.svg" alt="LinkedIn" className="w-8 h-8 opacity-50 hover:opacity-100 transition duration-300" />
                    </a>
                    <a href="https://github.com/Logan-Delaney" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github-brands.svg" alt="GitHub" className="w-8 h-8 opacity-50 hover:opacity-100 transition duration-300" />
                    </a>
                    <a href="/assets/Logan_Delaney_Resume.pdf" download="Logan_Delaney_Resume" rel="noopener noreferrer">
                        <img src="/assets/file-arrow-down-solid.svg" alt="Download Resume" className="w-8 h-8 opacity-50 hover:opacity-100 transition duration-300" />
                    </a>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0.5, 1, 1]} />
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <HeroCamera isMobile={isMobile}>
                        <Keyboard3D 
                        scale={isMobile ? [35, 35, 35] : isTablet ? [55, 55, 55] : [80, 80, 80]} 
                        position={[0, -5, 0]}
                        rotation={[5.7, 0, 0]}
                        onKeyPress={handleKeyPress}/>
                        </HeroCamera>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center">
                <button
                    onClick={() => window.location.hash = "#contact"}
                    className="mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105 opacity-50 hover:opacity-100 cursor-pointer"
                >
                    Let's Build Something Together
                </button>
            </div>
        </section>
    )
}

export default Hero