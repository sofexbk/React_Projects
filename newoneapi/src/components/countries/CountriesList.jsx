import {useState,useEffect,useRef} from "react"
import axios from "axios"
const CountriesList = () => {
   const[countries,setCountries]=useState([]) 
   const[segment,setSegment]=useState(["all"])
   const searchInput=useRef("")
   const region=useRef("")

   const getCountries=async()=> {

    try {
      const result =await axios.get(`https://restcountries.com/v3.1/${segment}`)
      console.log(result.data) 
      if(result.status === 200){
        setCountries(result.data)
      }
    } catch (error) {
      console.error(error)
    } 

   }


   const searchCountries=async(e)=> {
    e.preventDefault();
    let search =searchInput.current.value

    if(search === ""){
        alert("please write smtg")
        return
    }
    setSegment(`name/${search}`)

   }

   const reset =()=> {
    searchInput.current.value=""
    region.current.value=""
    setSegment("all")
   }

   const searchByRegion= () =>{
    let selectedRegion=region.current.value
    if(selectedRegion ===""){
        return
    }
    setSegment(`region/${selectedRegion}`)

   }



// dik tableau d use effect zdnalih segment
//kanmentioniw fih ga3 les states libghitihom , wlihoma aykono declencheur dyal useEffect
//biima3na ida t changa chi state , automatiquement et excecuta useeffect 
// ndiro fih plus q'un state
useEffect(()=>{
    getCountries()
},[segment])

  return (
    <div>
      <div className="row my-5">
        <div className="col-md-8">
            <h1>List of countries</h1>
        </div>    
            <div className="col-md-4 text-right">
                 

               <form className="d-flex" onSubmit={searchCountries}>
               <select onChange={searchByRegion} ref={region} className="form-control mr-2" >
                    <option value="">Select region</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europa</option>
                    <option value="americas">Americas</option>
                    <option value="oceania">Oceania</option>
                 </select>
                 <input ref={searchInput} className="form-control me-sm-2" type="search" placeholder="Search"/>
                 <button  className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                 {segment !== "all" ?
                  (<button onClick={reset} className="btn btn-link my-2 my-sm-0" type="button" >Reset</button>) 
                  : ''}
                 
               </form>
            </div>
        </div>
    

      <div className="row"> 
      {countries.map((country,index) =>(
        <div className="col-md-4" key={index}>
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
