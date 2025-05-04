import './SearchBox.css'
import { IoSearch } from "react-icons/io5";

function SearchBox() {
    return (
            <div className="searchBox position-relative d-flex align-items-center">
                <IoSearch className='ms-2' />
                <input type="text" placeholder='جستجو کنید...' />
            </div>
    )
}

export default SearchBox;