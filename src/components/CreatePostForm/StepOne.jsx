import "./createpostform.scss"

export const StepOne = ({error, inputs, handleChange}) => {

    return (
        <div>
            {error && (<div className="error">{error}</div>)}
            <form>
                <div>
                    <label htmlFor="title">Title of project</label>
                    <input type="text" value={inputs.title} placeholder="Title" name="title" required onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="link">Link to project</label>
                    <input type="text" value={inputs.link} placeholder="Github or website" name="link" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="shortDesc">Short Description</label>
                    <input type="text" value={inputs.shortDesc}  placeholder="Short Description" name="shortDesc" onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}
