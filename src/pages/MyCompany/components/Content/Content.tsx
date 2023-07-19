import { FC } from 'react'
import ConnectedCompanyTopBar from './components/ConnectedCompanyTopBar/ConnectedCompanyTopBar'
import ConnectedCompanyItems from './components/ConnectedCompanyItems/ConnectedCompanyItems'

const Content: FC = () => (
    <div className="bg-userContent min-h-screen pt-24">
        <ConnectedCompanyTopBar/>
        <ConnectedCompanyItems/>
    </div>
)

export default Content
