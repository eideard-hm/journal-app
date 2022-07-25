import { useEffect } from 'react';

export const useChangePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ${import.meta.env.VITE_APP_NAME}`;
  }, [title]);
};
