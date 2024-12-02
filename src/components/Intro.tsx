import React from "react";

const Intro: React.FC = () => {

    return (
        <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
                Hey!
            </h3>

            <p className="text-center mt-4">
                I like building cool stuff. Check some of that out below. If you ever wanna reach out, you can send me a piece of electronic mail at <a href="mailto:hey@jwt2706.ca" className="text-blue-500">hey@jwt2706.ca</a>!
            </p>
        </div>
    );
};

export default Intro;