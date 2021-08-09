const NYTIMES_BASE_URL = "https://api.nytimes.com/svc/books/v3/lists/current/";

export const fetchHCFictionBestseller = async (genre = "hardcover-fiction") => {
  const endpoint = `${NYTIMES_BASE_URL}${genre}.json?api-key=${process.env.REACT_APP_API_KEY}`;
  return await fetch(endpoint).then((res) => res.json());
};

export const fetchHCNonfictionBestseller = async (
  genre = "hardcover-nonfiction"
) => {
  const endpoint = `${NYTIMES_BASE_URL}${genre}.json?api-key=${process.env.REACT_APP_API_KEY}`;
  return await fetch(endpoint).then((res) => res.json());
};

export const fetchPictureBestseller = async (genre = "picture-books") => {
  const endpoint = `${NYTIMES_BASE_URL}${genre}.json?api-key=${process.env.REACT_APP_API_KEY}`;
  return await fetch(endpoint).then((res) => res.json());
};
