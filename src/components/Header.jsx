import searchIcon from '../assets/search1.png'
export default function Header () {
    return (
        <div className="py-8">
            <form action="" className="h-12 bg-[#3b3b3b] mx-4 rounded-lg flex items-center justify-between gap-2 px-4">
                <img src={searchIcon} alt="search icon" className="inline-block h-4 w-4"/>
                <input type="text" placeholder="Search movies by title..." className="flex-1 placeholder:text-[#9CA3AF] placeholder:text-sm placeholder:font-light font-inter font-medium outline-none text-white"/>
            </form>
        </div>
    )
}