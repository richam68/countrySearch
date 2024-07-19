import React, {useState, useEffect} from 'react'
import Cards from './Cards';
import "./style.css";

const Home = () => {
  const [search, setSearch] = useState('');
  const [flagData, setFlagData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(()=> {
    apiData()
  }, []);

  async function apiData(){
    try{
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setFlagData(data)
    }catch(error){
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setSearch(e.target.value);

    let filtering = flagData.filter((item) => item.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilterData(filtering);
  }

  return (
    <div>
      <input type='text' value={search} onChange={handleChange} placeholder='Search for countries...' className='countryCard_textInput'/>
      <br/>
      <Cards flagData={search.length > 0 ? filterData : flagData}/>
    </div>
  )
}

export default Home