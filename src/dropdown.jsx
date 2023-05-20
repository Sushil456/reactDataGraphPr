import { useState } from "react"

export const Drop =()=>{

    const countries = [
        {
            name:'India',
            states:[
                {name:'Bihar', cities: ['Dehri', 'Patna']},
                {name:'Delhi', cities: ['Mukherji Nagar', 'Chetna Bharga']},
                {name:'Bangalore', cities: ['Marathalli', 'KR Puram']},
                ]
        }, 
        {
            name:'America', 
            states:[
            {name:'dsak', cities:['dfasdf', 'amricancity']},
            {name:'mingo', cities:['tarak', 'fatak']},
            {name:'dingla', cities:['rahak', 'aasdfusho']},
        ]
        }
    ]

    const [country, setCountry] = useState(' Select-country')
    const [state, setstate] = useState(' select-country')
    const [city, setcity] = useState(' select-country')


    const [states, setstates] = useState([])
    const [cities, setcities] = useState([])
    
    const changeCountry = (event)=>{
        setCountry(event.target.value)
        setstates(countries.find(ctr =>(ctr.name === event.target.value)).states)
    }
    const changeState = (event)=>{
        setstate(event.target.value)
        setcities(states.find(sta =>(sta.name === event.target.value)).cities)
    }
    const changeCity = (event)=>{
        setcity(event.target.value)
        
    }

    return (
        <>
        <h3>Select Country & City</h3>
        <select className = "form-control" value={country} onChange={changeCountry}>
            <option> -- Country --</option>
            {countries.map(ctr =>(<option value={ctr.name}>{ctr.name}</option>))}
        </select>
        <br />
        <select className = "form-control" value={state} onChange={changeState}>
            <option> -- Country --</option>
            {states.map(ctr =>(<option value={ctr.name}>{ctr.name}</option>))}
        </select>
        <br />
        <select className = "form-control" value={city} onChange={changeCity}>
            <option> -- Country --</option>
            {cities.map(ct =>(<option value={ct}>{ct}</option>))}
        </select>

        </>
    )
}