import React from "react";

const SocialMediaLinks: React.FC = () => {
    const socialLinks = [
        {
            href: "https://facebook.com/nistor.andreea.14",
            ariaLabel: "Facebook",
            colorClass: "facebook_color",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
        {
            href: "https://instagram.com/andreeanistor2000",
            ariaLabel: "Instagram",
            colorClass: "instagram_color",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            ),
        },
        {
            href: "https://tiktok.com/@nistorandreea0",
            ariaLabel: "TikTok",
            colorClass: "tiktok_color",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
            ),
        },
        {
            href: "https://linktr.ee/andreea.nistor2208",
            ariaLabel: "Linktree",
            colorClass: "linktree_color",
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
            ),
        },
    ];

    return (
        <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${link.colorClass} hover:${link.colorClass} transition-colors duration-200`}
                    aria-label={link.ariaLabel}
                >
                    {link.svg}
                </a>
            ))}
            <style jsx>{`
        .facebook_color:hover {
          color: #1877f2;
        }
        .instagram_color:hover {
          color: #d83d68;
        }
        .tiktok_color:hover {
          color: #69c9d0;
        }
        .linktree_color:hover {
          color: #43e660;
        }
      `}</style>
        </div>
    );
};

export default SocialMediaLinks;
