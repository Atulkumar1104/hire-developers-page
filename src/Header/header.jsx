import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState("translate-y-0");
  const navigate = useNavigate();
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);

  // Explicitly check if we're on the home page (either "/" or "/home")
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  // Effect for handling scroll to top on page navigation
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Effect for handling scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const currentScroll = window.scrollY;

      // Hide header when scrolling down past hero section
      if (currentScroll > lastScrollY && currentScroll > heroHeight) {
        setHeaderStyle("-translate-y-full");
      } else {
        setHeaderStyle("translate-y-0");
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-gray-900 shadow-md fixed w-full transition-transform duration-300 z-50 ${headerStyle}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={handleHomeClick}>
              <img
                src="https://i0.wp.com/xstrategyservices.com/wp-content/uploads/2023/12/1024_1024-icon.png?fit=1024%2C1024&ssl=1"
                alt="Company Logo"
                className="h-16 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-600 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gray-900 transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="block text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-orange-600 px-3 py-2 font-medium w-full text-left transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="block text-white hover:text-orange-600 px-3 py-2 font-medium transition-colors duration-200"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-orange-600 px-3 py-2 font-medium w-full text-left transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
