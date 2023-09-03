import { useState, useEffect, useCallback } from 'react';

export enum Size {
  SM = 'sm',
  MD = 'md',
  LG = 'lg'
}

export const useHandleResize = (sm = 600, md = 960): Size => {
  const getCurrentSize = useCallback(() => {
    const size = window.innerWidth;

    if (size <= sm) return Size.SM;
    else if (size > sm && size <= md) return Size.MD;
    else return Size.LG;
  }, [sm, md]);

  const [currentSize, setCurrentSize] = useState<Size>(getCurrentSize());

  useEffect(() => {
    window.addEventListener('resize', () => setCurrentSize(getCurrentSize()));

    return () => {
      window.removeEventListener('resize', () =>
        setCurrentSize(getCurrentSize())
      );
    };
  }, [getCurrentSize]);

  return currentSize;
};