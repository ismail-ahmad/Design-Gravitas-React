import { useRef, useEffect, createContext, useContext } from 'react';

export const sharedIntersectionObserverContext = createContext(null);
    

export const SharedIntersectionObserverProvider = ({children, threshold}) => {
    const callbacks = useRef(new Map());
    const observerRef = useRef(null);
    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                    const cb = callbacks.current.get(entry.target);
                    cb?.(entry);
            });
        }, {threshold});
        return () => {
            observerRef.current?.disconnect();
        }
    },[threshold]);

    const observe = (el, cb) => {
        if(!el || !cb) return;
        callbacks.current.set(el, cb);
        observerRef.current?.observe(el);

        return () => {
            if(observerRef.current && callbacks.current.has(el)) {
            observerRef.current.unobserve(el);
            callbacks.current.delete(el);
            }
        }
    }


    return (
        <sharedIntersectionObserverContext.Provider value={{observe}}>
            {children}
        </sharedIntersectionObserverContext.Provider>
    );
}