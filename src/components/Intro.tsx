import React from "react";

const Intro: React.FC = () => {
    return (
        <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">
                Hey!
            </h3>
            <div className="bg-gray-800 bg-opacity-75 p-4 rounded-md">
                <p className="text-justify">
                    I'm <b>jwt2706</b>, I'm from 🇨🇦 and I like building stuff. I've been programming for 10+ years with projects ranging from webdev, to robotics, to AI/ML, and more recently, basic OS dev. You can check out some of my public project below!
                    <br />
                    <br />
                    If you wanna chat, feel free to reach out at <a href="mailto:hey@jwt2706.ca" className="underline bg-slate-950 rounded-md px-1 py-1">hey@jwt2706.ca</a>. :D
                </p>
            </div>
        </div>
    );
};

export default Intro;