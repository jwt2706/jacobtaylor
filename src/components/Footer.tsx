import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Footer: React.FC = () => {
    const scrollToTop = () => {
        gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
    };

    return (
        <footer className="text-white py-4 my-8 rounded-lg">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} jwt2706. All rights reserved.</p>
                <p>
                    <button onClick={scrollToTop} className="text-green-500 hover:underline cursor-pointer bg-transparent border-none p-0">Back to top</button>
                    <span> | </span>
                    <a href="mailto:hey@jwt2706.ca" className="text-green-500 hover:underline">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;