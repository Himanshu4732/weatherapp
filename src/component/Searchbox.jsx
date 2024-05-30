export default function Searchbox({ search, setSearch, handleSearch }) {
    return (
      <div className="search-engine w-full flex justify-center p-5">
        <input
        className=" w-3/5 h-10 outline-black outline-2 focus:outline-none px-3 py-2 rounded-xl z-10 placeholder:text-gray-700"
          type="text"
          placeholder="Enter City Name"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
        className="px-5 py-2 mx-[-10px] h-10 bg-black rounded-xl text-white"
        onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  }