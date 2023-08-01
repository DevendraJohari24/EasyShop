import { useState } from 'react';
import { useEffect } from 'react';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "retro" : "forest");
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => (e.target.checked ? setTheme("forest"): setTheme("retro"));

    return (
    <>
        <input type="checkbox" className="toggle toggle-success" onChange={handleToggle} checked={theme === "retro" ? false : true}  />
    </>
  )
}
