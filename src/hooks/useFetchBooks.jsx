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

  return [fetchBooksData, fetchCertainBook];
};
