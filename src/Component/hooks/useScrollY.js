import { useEffect, useState } from 'react';

export function useScrollY() {
    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = () => {
        const scrollYY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollYY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, []);

    return [scrollY];
}
