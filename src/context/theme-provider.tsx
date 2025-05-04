// resources/js/components/ThemeProvider.tsx
import { createContext, useContext, JSX } from 'solid-js';

type ThemeContextType = {
    colors: {
        primary: string;
        teal: string;
        coral: string;
        // Add more colors as needed
    };
};

const defaultTheme: ThemeContextType = {
    colors: {
        primary: 'var(--color-primary)',
        teal: 'var(--color-teal)',
        coral: 'var(--color-coral)',
        // Add more colors as needed
    }
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export function ThemeProvider(props: { children: JSX.Element }) {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
