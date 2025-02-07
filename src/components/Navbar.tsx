import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";

const navItems = [
  { name: "Acasă", href: "/#home" },
  { name: "Portofoliu", href: "/#portofolio" },
  { name: "Servicii", href: "/#pricings" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(
    location.hash || (location.pathname === "/" ? "#home" : location.pathname),
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleIntersection = () => {
      // Only set up intersection observer on the home page
      if (location.pathname !== "/") return;

      const sections = document.querySelectorAll("section");
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hash = `#${entry.target.id}`;
            setCurrentPath(hash);
            history.replaceState(null, "", hash);
          }
        });
      }, observerOptions);

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    };

    handleIntersection();
  }, [location.pathname]);

  useEffect(() => {
    // Update currentPath when location changes
    if (location.pathname === "/") {
      setCurrentPath(location.hash || "#home");
    } else {
      setCurrentPath(location.pathname);
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      // Handle internal links on home page
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const targetSection = document.querySelector(href.substring(1));
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      } else {
        const targetSection = document.querySelector(href.substring(1));
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    } else {
      // Handle navigation to other pages
      navigate(href);
    }

    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };
  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Empty div for spacing */}
        <div className="w-[200px] hidden md:block"></div>

        {/* Centered navigation */}
        <nav className="md:bg-pink-100/80  shadow-lg rounded-full px-8 navbar-container">
          <div className="h-12 flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full bg-pink-100/80  shadow-lg cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    currentPath === item.href
                      ? "bg-amber-50 text-black"
                      : "text-gray-600 hover:bg-amber-50 hover:text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Right oval container with social icons */}
        <div className="hidden md:flex items-center">
          <div className="bg-pink-100/80 backdrop-blur-md shadow-lg rounded-full px-4 h-12 flex items-center justify-center">
            <SocialMediaLinks />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 left-0 bg-pink-100 w-64 z-50 shadow-lg md:hidden">
          <div className="p-6">
            <button
              onClick={toggleMobileMenu}
              className="mb-4 w-full flex justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium text-center w-full flex justify-center ${
                    currentPath === item.href
                      ? "bg-amber-50 text-black"
                      : "text-gray-600 hover:bg-amber-50 hover:text-black"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex justify-center space-x-8 mt-6">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
