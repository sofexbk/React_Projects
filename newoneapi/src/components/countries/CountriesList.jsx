import {useState,useEffect} from "react"
import axios from "axios"
const CountriesList = () => {



   const[countries,setCountries]=useState([]) 

   const getCountries=async()=> {

    try {
      const result =await axios.get("https://restcountries.com/v3.1/all")
      console.log(result.data) 
      if(result.status === 200){
        setCountries(result.data)
      }
    } catch (error) {
      console.error(error)
    } 

   }

useEffect(()=>{
    getCountries()
},[])

  return (
    <div>
      <div className="row my-5">
        <div className="col-md-8">
            <h1>List of countries</h1>
            <div className="col-md-4"></div>
        </div>
      </div>

      <div className="row"> 
      {countries.map(country =>(
        <div className="col-md-4" key={country.cca3}>
            <div className="card my-2" >
                <img className="card-img-top" src={country.flags.png} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">{country.name.official}</h4>
                  <p className="card-text">Region:{country.region}</p>
                  <p className="card-text">Capital:{country.capital}</p>
                </div>
            </div>
      </div>
      ))
      }
      </div>
    </div>
  )
}

export default CountriesList
