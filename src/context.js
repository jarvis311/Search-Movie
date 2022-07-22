import React, { useEffect, useState } from "react"


const AppContext = React.createContext()


export const Movie_API_URI = `https://www.omdbapi.com/?apikey=b2ad8e8&`

const AppProvide = ( {children} ) => {
    const [loader, setLoader] = useState(true)
    const [listOfMovie, setListOfMovie] = useState([])
    const [isError, setIsError] = useState({show:'false', msg:''})
    const [query, setQuery] = useState('marvel')



     
const getMovieList = async() => {
    setLoader(true)
    try {
        const response = await fetch(`${Movie_API_URI}&s=${query}`) 
        const jsonData = await response.json()
        console.log(jsonData);
        if(jsonData.Response === 'True'){
            setListOfMovie(jsonData.Search)
            setLoader(false)
            setIsError({
                show:false,
                msg:""
            })
        }else{
            setIsError({
                show:true,
                msg:jsonData.Error
            })
        }
    } catch (error) {
        
    }
}
    useEffect(() => {
        const timer = setTimeout(() => {
            getMovieList();  
        }, 1000);

        return () => clearTimeout(timer)
    }, [query])
return <AppContext.Provider value={{loader, listOfMovie, isError, setQuery, query}} >               
        {children}
    </AppContext.Provider>
}


export {AppContext, AppProvide}
