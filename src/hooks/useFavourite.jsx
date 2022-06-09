import { useState, useEffect, useCallback } from 'react';

export const useFavourite = () => {
  const addFavourite = useCallback(async (book) => {
    const ls = window.localStorage;
    let actualFav = JSON.parse(ls.getItem('fav'));
    actualFav = actualFav ? [...actualFav] : [];
    if (actualFav.find((e) => e.title === book.title)) return;
    actualFav.push(book);
    window.localStorage.setItem('fav', JSON.stringify(actualFav));
    console.log('parsed', JSON.parse(ls.getItem('fav')));
    console.log(window.localStorage);
  }, []);

  const getFabourite = useCallback(() => {
    const ls = window.localStorage;
    const fav = JSON.parse(ls.getItem('fav'));
    return fav;
  }, []);
  return [addFavourite, getFabourite];
};
