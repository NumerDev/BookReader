import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

export const useFetchBooks = () => {
  const fetchBooksData = useCallback(async (e) => {
    const result = await axios(`https://gnikdroy.pythonanywhere.com/api/book/?page=${e}`);
    return result.data.results;
  }, []);

  const fetchCertainBook = useCallback(async (e) => {
    const result = await axios(`https://gnikdroy.pythonanywhere.com/api/book/${e}`);
    return result.data;
  }, []);

  const findBooks = useCallback(async (searchPhrase) => {
    const result = await axios.get(`https://gnikdroy.pythonanywhere.com/api/book/?search=${searchPhrase}`);
    return result;
  }, []);

  return [fetchBooksData, fetchCertainBook, findBooks];
};
