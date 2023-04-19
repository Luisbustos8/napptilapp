import { useNavigate } from "react-router-dom"
import { Cart } from "../Cart/cart"



export const Header = () => {

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }

    return (
        <header class="h-[70px] bg-black flex justify-between items-center">
            <p class="text-white mx-5" onClick={handleHome}>N A P P T I L A P P</p>
            <Cart  cantidad={3}/>
        </header>
    )
}