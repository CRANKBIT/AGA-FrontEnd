import { FC } from 'react'
import NavLink from './components/NavLink/NavLink';
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';



const FooterContainer: FC = () => {
    
    return (
        <div className='bg-[#03111B] text-white h-96 mx-auto flex flex-col justify-center max-w-7xl'>
        <div className='text-base space-x-9 pt-28 mx-auto'>
              <NavLink Ref="/features" LinkName="Features"/>
              <NavLink Ref="/pricing" LinkName="Pricing"/>
              <NavLink Ref="/contact" LinkName="Contact"/>
        </div>
    
        <div className='text-xs pt-16 mx-auto'>
       © Report Builder, 2023 - All Rights Reserved 
        </div>
    
        <div className='justify-center items-center z-10 pt-14 mx-auto'>
            <ScrollUpButton/>
        </div>
    </div>
    )
}







export default FooterContainer