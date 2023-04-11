import { useState } from "react"



export const SearchBar = ({onSearch, products}) => {

    const [ searchItem, setSearchItem ] = useState('');

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <div class="flex justify-end mb-2">
            <input
                value={searchItem}
                onChange={handleSearch}
                type="text" 
                placeholder="Find your favorite cell phone" 
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-[300px] appearance-none leading-normal" />       
        </div>
    )
}