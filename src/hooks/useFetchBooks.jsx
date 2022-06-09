import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

export const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);

  const fetchBooksData = useCallback(async (e) => {
    const result = await axios(`https://gnikdroy.pythonanywhere.com/api/book/?page=${e}`);
    return result.data.results;
  }, []);

  return [books, fetchBooksData];
};
