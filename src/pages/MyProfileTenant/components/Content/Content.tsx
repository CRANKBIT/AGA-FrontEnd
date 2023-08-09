import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './components/Modal'

const Content: FC = () => {
  const [modalClose, setModalClose] = useState<boolean>(true)

  return (
    <div className="bg-background-light pt-14 px-20 min-h-screen ">
      <h2 className="text-[26px] font-bold">My Profile</h2>
      <h2 className="text-[26px] font-bold text-center mt-[130px]">Alonso</h2>
      <div className="w-[803px] h-[109px] bg-white rounded-[15px] mt-[60px] flex items-center p-6">
        <div>
          <div className="flex">
            <span className="w-80 text-xl">Full Name</span>
            <span className="text-[#6F6F6F] text-xl w-[375px]">Alonso W</span>
            <button
              type="button"
              onClick={() => {
                setModalClose(false)
              }}
              className="w-14 h-6 border border-[#DDDBDA] rounded text-primary text-5 font-medium"
            >
              Edit
            </button>
          </div>
          <div className="flex">
            <span className="w-80 text-xl">Phone</span>
            <span className="text-[#6F6F6F] text-xl w-[200px]">400000000</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="." className="text-base text-[#FF887B] border-b mt-[200px]">
          Request to Close Account
        </Link>
      </div>

      {!modalClose && (
        <Modal
          setClose={() => {
            setModalClose(true)
          }}
        />
      )}
    </div>
  )
}

export default Content
