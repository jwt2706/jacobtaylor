import React from "react";

const Intro: React.FC = () => {

    return (
        <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">
                Hey!
            </h3>
            <p className="text-justify mt-4 mb-8">
                I'm <b>jwt2706</b>, I'm from 🇨🇦 and I like building stuff. I've been programming for about 10 years now. Started out with webdev and robotics, and now I'm venturing more into AI/ML and low level programming. You can check out some of my public project below.
                <br />
                <br />
                If you wanna chat, feel free to reach out at <a href="mailto:hey@jwt2706.ca" className="text-sky-800 underline underline-offset-4">hey@jwt2706.ca</a>. :D
            </p>
        </div>
    );
};

export default Intro;