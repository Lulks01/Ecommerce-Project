import './header.css';
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";


export function Header() {
    
    return (
        <div className='Main'>
           <div className='menuContainer'> <button className='HeaderButton'><AiOutlineMenu id='menu'/></button></div>
           <div className='homeContainer'><button className='HeaderButton'><GrHomeRounded id='home'/></button></div>
           <div className='searchContainer'> <button className='HeaderButton'><AiOutlineSearch id='search'/></button></div>
        </div>
    )
};

