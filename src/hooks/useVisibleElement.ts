import React from 'react'
import { ElementHtml } from './useAnimateControl';

type UseVisibleElementProps = {
    elementRef: React.MutableRefObject<ElementHtml | null>;
}

const useVisibleElement = ({elementRef}: UseVisibleElementProps) => {
    const [visible, setVisible] = React.useState(false);

    const offSetTop = (elTop: number) => {
        const elTopFloor = Math.floor(elTop);
        const windowInnerHeightHalf = window.innerHeight * .5;
  
        return elTopFloor - windowInnerHeightHalf;
    }

    React.useEffect(() => {
        const element = elementRef.current;

        if(element){
            const checkElementVisible = () => {
                const elementBoundingTop = element.getBoundingClientRect().top;
    
                const visibleElement = offSetTop(elementBoundingTop) < 0; 
    
                setVisible(visibleElement);
            }
            checkElementVisible();
            
            window.addEventListener("scroll", checkElementVisible);

            return () => window.removeEventListener('scroll', checkElementVisible);
        }
    }, []);

    return visible;
}

export default useVisibleElement