import React from 'react'
import usePersistedStateLs from './usePersistedStateLs';

type Theme = 'dark' | 'light';

const useTheme = () => {
    const [theme, setTheme] = usePersistedStateLs<Theme>('theme', 'dark');
    const themeActive = theme === 'dark' ? 'light' : 'dark';

    React.useEffect(() => {
        const elementRoot = document.documentElement as HTMLElement;

        elementRoot.classList.remove(themeActive);
        elementRoot.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(themeActive);
    }

    return {
        theme,
        toggleTheme,
    }
}

export default useTheme