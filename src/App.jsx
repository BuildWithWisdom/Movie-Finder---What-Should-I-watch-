import { useEffect, useState } from 'react';
import Header from './components/Header';
import clsx from 'clsx';

function App() {
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState('popular')
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  const apiKey = import.meta.env.VITE_API_KEY

  const getMovies = async (category) => {
    await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
    .catch(error => console.log(error))
  }

  function handlePopular() {
    setCategory('popular')
      getMovies('popular')
  }

  function handleTopRated() {
    setCategory('top_rated')
      getMovies('top_rated')
  }
  function handleUpcoming() {
    setCategory('upcoming')
      getMovies('upcoming')
  }
  useEffect(() => {
    handlePopular()
  }, [])

  return (
    <>
    <Header />
    <main className='bg-[#121212] shadow-lg px-4 py-4'>
      <div className="flex justify-start items-center gap-3 text-white pt-1 pb-2">
        <button onClick={handlePopular} type='button' className={clsx('rounded-lg text-sm py-1.5 px-4 cursor-pointer', category === 'popular' ? "bg-[#EF4444]" : 'bg-[#1E1E1E]')}>Popular</button>
        <button onClick={handleTopRated} type='button' className={clsx('rounded-lg text-sm py-1.5 px-4 cursor-pointer', category === 'top_rated' ? "bg-[#EF4444]" : 'bg-[#1E1E1E]')}>Top Rated</button>
        <button onClick={handleUpcoming} type='button' className={clsx('rounded-lg text-sm py-1.5 px-4 cursor-pointer', category === 'upcoming' ? "bg-[#EF4444]" : 'bg-[#1E1E1E]')}>Upcoming</button>
      </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-y-6 gap-x-5 place-content-center py-4'>
      {movies.map(movie => {
        return(
          <div key={movie.id} className='rounded-xl shadow-movie-card max-sm:max-w-[450px]'>
            <img src={imgUrl + movie.poster_path} alt={movie.title} className='rounded-md pb-3 '/>
            <h3 className='font-inter text-white font-semibold text-sm'>{movie.title}</h3>
            <p className='font-inter text-[#9CA3AF] font-light text-xs'>{movie.release_date}</p>
          </div>
        )
      })}
    </div>
    </main>
    </>
  );
}

export default App;