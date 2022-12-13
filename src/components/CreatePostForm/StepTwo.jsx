import "./createpostform.scss"
import { useState } from "react";

export const StepTwo = ({error, inputs, handleChange}) => {  
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
                    <label>Select Categories</label>
                    <select name="categories" onChange={handleChange} multiple>
                        <option value="1">Artificial Intelligence</option>
                        <option value="2">Cloud</option>
                        <option value="3">Datascience</option>
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
