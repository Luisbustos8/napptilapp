import { useCameraDetails } from "../../utils/useCameraDetails"
import SYSTEM from '../../assets/icons/android.png'
import CPU from '../../assets/icons/cpu.png'
import RAM from '../../assets/icons/ram.png'
import SCREEN from '../../assets/icons/expand.png'
import BATTERY from '../../assets/icons/battery.png'
import CAMERA from '../../assets/icons/camera.png'
import DISPLAY from '../../assets/icons/display.png'
import WEIGHT from '../../assets/icons/smartphone.png'


export const DescriptionDetails = ({productDetail}) => {
    
    return (
        <div class="container mx-auto px-4 lg:px-0">
            <h1 class="text-3xl font-bold py-4 text-center lg:text-left">Specifications of {productDetail.brand} {productDetail.model}</h1>
            <div class="overflow-x-auto">
                <div class="bg-gray-100 flex">
                    <p class="w-full px-2 py-2 border border-gray-300 font-bold text-center">Characteristics</p>
                </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={SCREEN} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">Screen resolution</p>
                <p class="py-2 w-full">{productDetail.displayResolution}, {productDetail.displaySize} and {productDetail.displayType}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={CPU} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">CPU</p>
                <p class="py-2 w-full">{productDetail.cpu}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={RAM} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">RAM</p>
                <p class="py-2 w-full">{productDetail.ram}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={SYSTEM} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">Operating system</p>
                <p class="py-2 w-full">{productDetail.os}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={BATTERY} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">Battery</p>
                <p class="py-2 w-full">{productDetail.battery}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={CAMERA} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">Camera</p>
                <p class="py-2 w-full">{useCameraDetails(productDetail.primaryCamera)}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={DISPLAY} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">Dimentions</p>
                <p class="py-2 w-full">{productDetail.dimentions}.</p>
            </div>
            <div className="flex border-b border-gray-300">
                <div className="flex items-center px-2">
                    <img src={WEIGHT} class='w-6 h-4' alt='life'/>
                </div>
                <p className="flex w-2/5 items-center font-bold">Weight</p>
                <p class="py-2 w-full">{productDetail.weight}</p>
            </div>
        </div>
    </div>
    )
}