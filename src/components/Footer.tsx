import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-4 my-8 rounded-lg">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} jwt2706. All rights reserved.</p>
                <p>
                    <a href="https://github.com/jwt2706" className="text-green-500 hover:underline">GitHub</a>
                    <span> | </span>
                    <a href="mailto:hey@jwt2706.ca" className="text-green-500 hover:underline">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;