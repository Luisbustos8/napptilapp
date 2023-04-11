


export const MobileImageDetail = ({image, name, ...props}) => {



    return (
        <div className="flex justify-center">
            <img src={image} alt={`image ${name}`} className="max-w-full h-auto" />
        </div>
    )
}