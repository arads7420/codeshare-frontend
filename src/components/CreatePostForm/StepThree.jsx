import "./createpostform.scss"
import { useState } from "react"

export const StepThree = ({error, inputs, handleChange}) => {
    return (
        <div>
            {error && (<div className="error">{error}</div>)}
            <form>
                <label>Provide a description</label>
                <textarea rows="10" value={inputs.description} name="description" placeholder="Description" onChange={handleChange} />
            </form>
        </div>
    )
}
