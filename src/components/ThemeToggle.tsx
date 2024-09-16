import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="flex items-center mr-10">
            <button
                className={`relative w-12 h-6 bg-gray-400 dark:bg-gray-600 rounded-full focus:outline-none`}
                onClick={() => setDarkMode(!darkMode)}
            >
                <div
                    className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${darkMode ? 'translate-x-6' : ''
                        }`}
                >
                    {darkMode ? (
                        <FaSun className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500" />
                    ) : (
                        <FaMoon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500" />
                    )}
                </div>
            </button>
        </div>
    );
}

export default ThemeToggle;
