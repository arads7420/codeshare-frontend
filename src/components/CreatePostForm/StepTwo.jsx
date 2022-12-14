import "./createpostform.scss"
import { useState } from "react";
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios"

export const StepTwo = ({error, inputs, handleChange}) => {  
    const { isLoading, data: categories } = useQuery(['categories'], () =>
      makeRequest.get("/categories").then(res => {return res.data})
    )
    
    return (
        <div>
            {error && (<div className="error">{error}</div>)}
            <form>
                <div>
                    <label>Select type of project</label>
                    <select name="type" onChange={handleChange}>
                        <option value="1">Free</option>
                        <option value="2">Paid</option>
                    </select>
                </div>
                <div>
                    <label>Select a Category</label>
                    <select name="category" onChange={handleChange}>
                        {!isLoading && (categories.map(item => 
                            <option value={item.id} key={item.id}>{item.name}</option>)
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="link">Link to logo</label>
                    <input type="text" value={inputs.logo} placeholder="Image Link" name="logo" onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}
