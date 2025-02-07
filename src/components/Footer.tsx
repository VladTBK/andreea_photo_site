import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex flex-col items-center space-y-6">
                    <div className="text-center">
                        <p className="text-sm">Capturing moments, creating memories.</p>
                    </div>
                    <div className="flex space-x-8">
                        <SocialMediaLinks />
                    </div>
                    <div className="text-center">
                        <p className="text-sm">&copy; {currentYear} Your Photography.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
