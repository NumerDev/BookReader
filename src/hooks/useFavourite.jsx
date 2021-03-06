import { useState, useEffect, useCallback } from 'react';

export const useFavourite = () => {
  const addFavourite = useCallback(async (book) => {
    if (book.title == undefined) return; //Kinda workaround and i should fix that
    const ls = window.localStorage;
    let actualFav = JSON.parse(ls.getItem('fav'));
    actualFav = actualFav ? [...actualFav] : [];
    if (actualFav.find((e) => e.title === book.title)) return;
    actualFav.push(book);
    window.localStorage.setItem('fav', JSON.stringify(actualFav));
  }, []);

  const getFavourite = useCallback(() => {
    const ls = window.localStorage;
    const fav = JSON.parse(ls.getItem('fav'));
    if (fav == null) return;
    return fav;
  }, []);
  return [addFavourite, getFavourite];
};
