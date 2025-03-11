import { useState, useEffect } from "react";

const ThemeContext = () => {
    const [theme, setTheme] = useState("white");

    useEffect(() => {
        document.body.style.backgroundColor = theme;
        document.documentElement.style.backgroundColor = theme; 
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "white" ? "black" : "white"));
    };

    return (
        <div style={{ textAlign: "center", padding: "20px", minHeight: "100vh" }}>
            <button 
                onClick={toggleTheme} 
                style={{ 
                    padding: "10px", 
                    fontSize: "16px", 
                    backgroundColor: theme === "white" ? "black" : "white",
                    color: theme === "white" ? "white" : "black",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}>
                Toggle Theme
            </button>
        </div>
    );
};

export default ThemeContext;
