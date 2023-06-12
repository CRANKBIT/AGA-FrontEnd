import { FC } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import handleScrollToTop from '../HandleScrollToTop/HandleScrollToTop';

const ScrollUpButton: FC = () => {
    const ScrollToTop = handleScrollToTop
  return (
    <div className='flex justify-center items-center h-10 w-10 bg-[#007ad333] rounded-full text-[#007AD3]'>
            <button className='hover:cursor-pointer hover:opacity-50 ease-in-out duration-300  active:translate-y-3' onClick={ScrollToTop}><ArrowUpwardIcon/></button>
    </div>
  )
}

export default ScrollUpButton