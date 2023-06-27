import { FC, useState } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'
import { Link } from '@mui/material'
import ReportList from '@/components/ReportList/ReportList'

const Report: FC = () => {
  const [, setImage] = useState<File | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0])
    }
  }

  return (
    <div className="flex h-screen bg-blue-100">
      <div className="w-1/5">
        <ReportList />
      </div>

      <div className="flex-1">
        <div className="h-screen bg-blue-100 flex flex-col mt-3 ">
          <div className="flex items-center justify-between">
            <div className="flex flex-col w-80">
              <h1 className="text-2xl font-bold ml-4 mt-8">Create New Report</h1>
              <div className="flex items-center">
                <div className="ml-4 text-xs">
                  <Link href="/report_1" underline="hover" className="text-xs">
                    My Report
                  </Link>
                </div>
                <p className="text-blue-400 text-xs">&nbsp;&gt;&gt;&nbsp;</p>
                <h1 className="text-xs"> Create New Report</h1>
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back to My Reports
            </button>
          </div>

          <div className="border border-black mt-4 mb-8 bg-white m-1 ml-64 mr-64 rounded-md">
            <div className="p-4">
              <div className="p-4">
                <h2 className="text-lg font-bold">Snapshot</h2>
                <div className="border-t border-black mx-auto w-full" />
                <div className="text-center mt-4">
                  <div className="flex flex-col items-center mb-4">
                    <p className="font-semibold">Services:</p>
                    <select className="p-2 border border-gray-300 w-full rounded">
                      <option value="a">Tyre Pressure</option>
                      <option value="b">Option B</option>
                      <option value="c">Option C</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-64 h-64 border border-black flex items-center justify-center bg-white text-center">
                      <label htmlFor="upload-image">
                        <HiOutlineCamera className="w-10 h-10 text-black cursor-pointer" />
                      </label>
                      <input
                        id="upload-image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </div>
                    <p className="mt-2 text-gray-600">Upload Image</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="border border-black p-2">
                  <textarea className="w-full h-20 p-2 bg-white" placeholder="Comments..." />
                </div>
              </div>
              <div className="p-4">
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
