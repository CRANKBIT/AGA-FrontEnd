import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFFFFF] w-[640px] h-[832px]  ">
      <div className="relative text-left w-[280px] h-[356px]">
        <h1 className="text-[#1E1E1E] text-[22px] mb-5 font-medium">Welcome back, Alonso</h1>
        <div>
          <div>
            <p className="text-[16px] leading-[19px] font-medium not-italic">Work email</p>
            <input
              className="box-border pl-[3px] w-[280px] h-[44px] mb-[24px] border-solid border-[1px] border-[#03111B] rounded-[5px]
             placeholder-shown:border-gray-500"
              placeholder="  Alonso@mail.com"
            />
          </div>
          <div>
            <p className="text-[16px] leading-[19px] font-medium not-italic">Your site</p>
            <input
              className="box-border pl-[3px] w-[280px] h-[44px] mb-[24px] border-solid border-[1px] border-[#03111B] rounded-[5px]
             placeholder-shown:border-gray-500 "
              placeholder="                                             .crankbit.net "
            />
          </div>
          <div>
            <p className="text-[16px] leading-[19px] font-normal not-italic text-[#1E1E1E66]">
              By clicking below, you agree to the Crankbit Cloud Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>

        <button className="w-[280px] h-[50px] text-[#FFFFFF] bg-[#007AD3] text-[18px] leading-[22px] font-bold rounded-[5px] mt-5">
          Agree
        </button>
      </div>
    </div>
  )
}

export default LoginPage
