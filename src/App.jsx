import { useEffect, useState } from "react";
import Header from "./components/Header";
import clsx from "clsx";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const apiToken = import.meta.env.VITE_API_ACCESS_TOKEN;
  const apiKey = import.meta.env.VITE_API_ACCESS_KEY;
  const message = "We could not find the specific movie you were looking for!";
  const [openModal, setOpenModal] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState({});

  async function handleChange(e) {
    e.preventDefault();
    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          setMovies(data.results);
          setCategory("");
          setSearchQuery("");
        } else {
          setMovies([]);
          setCategory("");
          return message;
        }
      })
      .catch((error) => console.log(error));
  }

  const getMovies = async (category) => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  };

  function handlePopular() {
    setCategory("popular");
    getMovies("popular");
  }

  function handleTopRated() {
    setCategory("top_rated");
    getMovies("top_rated");
  }
  function handleUpcoming() {
    setCategory("upcoming");
    getMovies("upcoming");
  }
  function handleMovieDetails(movieId) {
   setMovie(movies.find((movie) => movie.id === movieId))
   setOpenModal(true)
  }
  useEffect(() => {
    handlePopular();
  }, []);

  return (
    <>
      <Header title={searchQuery} setTitle={setSearchQuery} handleChange={handleChange} />
      <main className="bg-[#121212] shadow-lg px-4 py-4 relative">
        <div className={clsx("flex justify-start items-center gap-3 text-white pt-1 pb-2 transition-all duration-300", openModal ? "opacity-10 pointer-events-none" : "opacity-100 pointer-events-auto")}>
          <button
            onClick={handlePopular}
            type="button"
            className={clsx(
              "rounded-lg text-sm py-1.5 px-4 cursor-pointer",
              category === "popular" ? "bg-[#EF4444]" : "bg-[#1E1E1E]",
            )}
          >
            Popular
          </button>
          <button
            onClick={handleTopRated}
            type="button"
            className={clsx(
              "rounded-lg text-sm py-1.5 px-4 cursor-pointer",
              category === "top_rated" ? "bg-[#EF4444]" : "bg-[#1E1E1E]",
            )}
          >
            Top Rated
          </button>
          <button
            onClick={handleUpcoming}
            type="button"
            className={clsx(
              "rounded-lg text-sm py-1.5 px-4 cursor-pointer",
              category === "upcoming" ? "bg-[#EF4444]" : "bg-[#1E1E1E]",
            )}
          >
            Upcoming
          </button>
        </div>
        <div className={clsx("grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-5 place-content-center py-4 transition-all duration-300", openModal ? "opacity-10 pointer-events-none" : "opacity-100 pointer-events-auto")}>
          {movies.map((movie) => {
            return (
              <button
                onClick={() => handleMovieDetails(movie.id)}
                type="button"
                key={movie.id}
                className="rounded-xl shadow-movie-card max-sm:max-w-[450px] cursor-pointer"
              >
                <img
                  src={imgUrl + movie.poster_path}
                  alt={movie.title}
                  className="rounded-md pb-3 "
                />
                <h3 className="font-inter text-white font-semibold text-sm">
                  {movie.title}
                </h3>
                <p className="font-inter text-[#9CA3AF] font-light text-xs">
                  {movie.release_date}
                </p>
              </button>
            );
          })}
        </div>

        {movies.length === 0 && (
          <div className="flex justify-center items-center h-95">
            <p className="text-xl text-white font-bold text-center">
              {message}
            </p>
          </div>
        )}

        <Movie movie={movie} setMovie={setMovie} imgUrl={imgUrl} openModal={openModal} setOpenModal={setOpenModal}/>
      </main>
    </>
  );
}

export default App;
