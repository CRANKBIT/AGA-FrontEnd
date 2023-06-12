import React from 'react'
import file from '../../../assert/file.svg'

const FormBuilder = () => {
  return (
    <div className=" flex justify-center items-center bg-[#03111B] h-[832px] w-[640px] ">
      <div className="text-center">
        <div className="w-[77px] h-[99px] mx-auto">
          <img className="w-[77px] h-[99px] " src={file} alt="file picture" />
        </div>
        <div className="text-[#FFFFFF] w-[131px] h-[27px] text-[22px] font-medium leading-[22.63px]">
          Form Builder
        </div>
      </div>
    </div>
  )
}

export default FormBuilder
