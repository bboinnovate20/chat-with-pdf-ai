import { useState, useEffect, useRef, MutableRefObject } from 'react';

function useScrollAnimation(): [MutableRefObject<HTMLElement[]>, boolean[]] {
  const [isVisible, setIsVisible] = useState<boolean[]>([]);
  const domRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        let i = 0;
      const updatedVisibility = entries.map((entry) => {
        if(entry.isIntersecting) {
            
          entry.target.classList.add('animate-slide-down')
        }
        else {
            entry.target.classList.remove('animate-slide-down') 
        }
        return entry.isIntersecting
    });
   
    
    //   setIsVisible((prev) => {
    //     //   if (prev.length !== updatedVisibility.length) {
    //         // console.log(updatedVisibility.length)
    //         // return updatedVisibility;
    //     // }
    //     // return prev.map((oldValue, index) => oldValue || updatedVisibility[index]);
    //   });
    });
    
    domRef.current.forEach((item) => {
        if (item) observer.observe(item);
      });
    
    return () => {
        domRef.current.forEach((item) => {
            if (item) observer.unobserve(item);
          });
    };
  }, [isVisible]);

  return [domRef, isVisible];
}

export default useScrollAnimation;