import clsx from "clsx"

export default function Movie ({movie,setMovie, imgUrl, openModal, setOpenModal}) {
    const star = "★"
    const cancel = "✖"
    return (
        <>
    {movie.id && <section className={clsx("flex justify-center items-center fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-1000 z-50", openModal ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
             <div className="w-[768px] max-w-[768px] bg-[#1A1A1A] rounded-xl shadow-movie-card flex justify-between">
                <img src={imgUrl + movie.poster_path} alt={movie.title} className="inline-block w-45 h-auto"/>
                <div className="p-8">
                    <h3 className="font-inter text-white font-bold text-2xl">{movie.title}</h3>
                    <p className="font-inter text-[#9CA3AF] font-light text-sm/[1.5rem] mt-4">{movie.overview}</p>
                    <div className="flex justify-between items-center mt-4">
                        <span className="inline-block text-white text-sm font-inter"><span className="pr-2 font-bold text-[#FACC15] text-base">{star}</span>
                        {movie.vote_average}/10</span>
                        <span className="inline-block text-gray-400 text-sm font-inter">{movie.release_date}</span>
                    </div>
                </div>
             </div>
             <button onClick={() => {setOpenModal(false); setMovie({})}} type="button" className="text-2xl absolute top-2 right-2 cursor-pointer">
                {cancel}
             </button>
        </section>}
        </>
    )
}