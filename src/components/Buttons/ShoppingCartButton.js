import SHOPPING from '../../assets/icons/shopping.png'



export const ShoppingCartButton = ({disabled, onClick, color, storage, id}) => {
   const handle = () => {
        onClick({
            id: id,
            colorCode: color,
            storageCode: storage
        })
   }
    return (
        <div className='mt-10'>
            <button 
                className={`${disabled ? 'bg-slate-400 text-slate-200 flex py-2 px-4 rounded md:py-3 md:px-6 md:text-lg' : 'bg-cyan-500 hover:bg-cyan-800 flex text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg'}`}
                onClick={handle}
                disabled={disabled}
                type='submit'
            >
               {!disabled &&<img src={SHOPPING} className='w-8 h-6 pt-1 pr-3 fill-slate-200'/> }
                Add to cart
            </button>
        </div>
    )   
}