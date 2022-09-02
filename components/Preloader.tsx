import Lottie from "react-lottie";
import * as preloader from '../public/preloader.json';

const Preloader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: preloader,
    };

    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
    )
}

export default Preloader;