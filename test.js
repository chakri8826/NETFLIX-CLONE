const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjMwMzZlNWRiZTBmZjg5NzNhMjNhNDgzNjQ2NDE3NCIsIm5iZiI6MTc0MTYwMzAwOC42MzMsInN1YiI6IjY3Y2VjMGMwMjc5NGIwZDU5ODJhYmIzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWYcn5xMArvifWp_JG70AP1A5m-A3DVHqC7LPlaYonA",
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
