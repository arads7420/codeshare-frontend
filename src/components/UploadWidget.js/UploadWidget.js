import { useEffect, useRef } from "react"

export const UploadWidget = ({handleUploadResult}) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'auction-house-images',
            uploadPreset: 'oukb36y1'
        }, (error, result) => {
            handleUploadResult(result)
        })
    }, [])

    return (
        <button onClick={(e) =>{ 
            e.preventDefault()
            widgetRef.current.open()
        }}>
            Upload 
        </button>
    )
}
