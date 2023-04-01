import { useEffect, useState } from 'react';

export const useMediaQuery = (mediaQuery: string): boolean => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = (): void => setIsVerified(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler);
    }

    documentChangeHandler();

    return (): void => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, []);

  return isVerified;
};
