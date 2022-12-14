import "./popup.scss"
import { Dialog, DialogTitle, DialogContent} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

export const Popup = (props) => {
    const {openPopup, setOpenPopup} = props

    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogTitle>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    {props.title ? (<div className="title">{props.title}</div>) : (<div></div>)}
                    <button className="close" onClick={() => setOpenPopup(false)}><CloseIcon /></button>
                </div>
                
            </DialogTitle>
            <DialogContent>
                {props.children}
            </DialogContent>
        </Dialog>
    )
}
