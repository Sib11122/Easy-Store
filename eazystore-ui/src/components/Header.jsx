import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTags,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  // Get saved theme from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  // Apply theme to HTML element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  };

  // Common styling for navigation links
  const navLinkClass =
    "text-center text-lg font-primary font-semibold text-primary py-2 dark:text-light hover:text-dark dark:hover:text-lighter";

  return (
    <header className="border-b border-gray-300 dark:border-gray-600 sticky top-0 z-20 bg-normalbg dark:bg-darkbg">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">

        {/* Logo */}
        <Link to="/" className={navLinkClass}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold ml-2">
            Eazy Stickers
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center py-2 z-10">

          {/* Theme Toggle */}
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-light transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              className="w-4 h-4 dark:text-light text-primary"
            />
          </button>

          {/* Navigation Links */}
          <ul className="flex space-x-6">

            {/* Home */}
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? "underline" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? "underline" : ""}`
                }
              >
                About
              </NavLink>
            </li>

            {/* Contact */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? "underline" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>

            {/* Login */}
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? "underline" : ""}`
                }
              >
                Login
              </NavLink>
            </li>

            {/* Cart */}
            <li>
              <Link
                to="/cart"
                className="text-primary py-2 dark:text-light"
              >
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                />
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}