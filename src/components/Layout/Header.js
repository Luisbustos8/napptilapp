import { useNavigate } from "react-router-dom"



export const Header = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    return (
        <header class="h-[70px] bg-black flex justify-start items-center">
            <p class="text-white mx-5" onClick={handleHome}>N A P P T I L A P P</p>
        </header>
    )
}