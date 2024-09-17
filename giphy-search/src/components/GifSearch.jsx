import { useState } from "react"
function GifSearch({ setQuery }) {  //make a controlled form. Controlled form allows users input being kept track of by the state
    const [input, setInput] = useState('') // making state for search input 
    // creating a function for submiting the form
    const submitForm = (e) => {
        e.preventDefault();  // prevents from refreshing 
        setQuery(input); //setter function, updates query 
    }

    return ( // made the from into a controlled form
        <form onSubmit={submitForm}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
