import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Countries = () => {

const [data, setData] =useState([])

useEffect(()=> {

axios

.get("https://restcountries.com/v3.1/all")

.then((res)=>setData(res.data) )

},[])
return (
    data.map((country, index) => <Text key={index}>{country.translations.fra.common}</Text>)
);
};
    


export default Countries;