import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 my-8 rounded-lg">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} jwt2706. All rights reserved.</p>
                <p>
                    <a href="https://github.com/jwt2706" className="text-blue-400 hover:underline">GitHub</a> |
                    <a href="mailto:hey@jwt2706.ca" className="text-blue-400 hover:underline"> Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;