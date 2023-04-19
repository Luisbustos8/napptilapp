


export const MobileImageDetail = ({image, name, ...props}) => {
    
    return (
        <div className="flex justify-center h-full border-4">
            <img src={image} alt={`image ${name}`} className="max-w-full h-100" />
        </div>
    )
}