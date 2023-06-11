import { FC } from 'react'
import FeatureDescription from './components/FeatureDescription/FeatureDescription'
import FeaturesIcon from './components/FeaturesIcon/FeaturesIcon'

interface Props {
  icon: string
  content: string
  description: string
}

const FeatureCard: FC<Props> = ({ icon, content, description }) => (
  <div className=" flex-col w-60 h-40 shadow-2xl m-5 rounded-lg p-10">
    <FeaturesIcon icon={icon} content={content} />
    <FeatureDescription description={description} />
  </div>
)
export default FeatureCard
