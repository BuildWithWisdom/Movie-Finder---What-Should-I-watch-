import searchIcon from "../assets/search1.png";

export default function Header({ setTitle, handleChange, title }) {
  return (
    <div className="py-8">
      <form
        onSubmit={handleChange}
        className="h-12 bg-[#3b3b3b] mx-4 rounded-lg flex items-center justify-between gap-2 px-4"
      >
        <input
          type="text"
          value={title}
          name="movie"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search movies by title..."
          className="flex-1 placeholder:text-[#9CA3AF] placeholder:text-sm placeholder:font-light font-inter font-medium outline-none text-white"
        />
        <button onClick={handleChange} type="button" className="cursor-pointer">
          <img
            src={searchIcon}
            alt="search icon"
            className="inline-block h-6 w-6"
          />
        </button>
      </form>
    </div>
  );
}
