import { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import Maincontent from "./Maincontent";
import Contentleft from "./Contentleft";

export default function Content() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);
  console.log(weatherData)

  return (
    <div className="w-screen  bg-cover h-full flex justify-center items-center" >
      <div className=" bg-black/60 border-r-0 backdrop-blur-sm w-1/5 h-3/5 rounded-l-2xl z-10">
        {loading ? ( <div className="loading p-10 h-full w-full"><img src="./images/cloudy.gif" alt="" /></div>)
        :(weatherData && <Contentleft weatherData={weatherData} />)}
        
      </div>
      <div className=" border-2 backdrop-blur-sm bg-black/50 w-1/5 h-3/5 rounded-r-2xl border-none ">
        <Searchbox
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <Maincontent weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}
