import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PageContent: FC<Props> = ({ children }) => (
  <div className="bg-[#E9EFF4] w-full max-w-[975px] flex justify-center pt-[55px]">
    <div>
      <div>{children}</div>
    </div>
  </div>
)

export default PageContent
