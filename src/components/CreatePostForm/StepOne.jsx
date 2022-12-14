import "./createpostform.scss"
import { UploadWidget } from "../UploadWidget.js/UploadWidget"
import CloseIcon from '@mui/icons-material/Close';

export const StepOne = ({error, inputs, images, handleChange, handleDeleteImg, handleImagesUploadResult}) => {

    return (
        <div>
            {error && (<div className="error">{error}</div>)}
            <form>
                <div className="images">
                    <div className="imageinput">
                        <label>Project Images</label>
                        {images.length > 0 && (
                            <div className="uploadedimages">
                                
                                {images.map((imgSrc, idx) => 
                                    <span className="imgcontainer" key={idx}>
                                        <span className="deleteButton" onClick={handleDeleteImg} data-idx={idx}><CloseIcon style={{fontSize: "0.8rem"}}/></span>
                                        <img src={imgSrc} key={idx}></img>
                                    </span>)
                                }
                            </div>
                        )}

                        
                        <div>
                            <UploadWidget handleUploadResult={handleImagesUploadResult} />
                        </div>
                    </div>
                </div>
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
