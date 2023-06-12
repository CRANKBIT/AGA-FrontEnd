import {FC} from 'react'
import{Link} from 'react-router-dom';
import handleScrollToTop from '../HandleScrollToTop/HandleScrollToTop';


const NavLink: FC<{ LinkName: string, Ref: string }> = ({LinkName, Ref}) => {
    
    return (

        <div className='inline-block'> <Link to={Ref} className='hover:opacity-50 ease-in-out duration-300' onClick={handleScrollToTop}>{LinkName}</Link></div>

    )
}







export default NavLink