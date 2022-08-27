import React from 'react'

export type ElementHtml = HTMLElement | HTMLDivElement | HTMLSpanElement | HTMLImageElement | HTMLHeadingElement | HTMLParamElement;

type UseAnimateControlProps = {
    elementRef: React.MutableRefObject<ElementHtml | null>;
    setShowElement: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
}

const useAnimateControl = ({elementRef, setShowElement, visible}: UseAnimateControlProps) => {
    React.useEffect(() => {
        const currentElement = elementRef.current;

        if(currentElement){
            const hasDelay = currentElement.hasAttribute('data-animate-delay');
            const valueDelay = hasDelay ? Number(currentElement.getAttribute('data-animate-delay')) : 0;

            if(visible){
                setTimeout(() => {
                    setShowElement(true);
                }, valueDelay);
            }
        }
    }, [elementRef, visible]);

    return elementRef;
}

export default useAnimateControl