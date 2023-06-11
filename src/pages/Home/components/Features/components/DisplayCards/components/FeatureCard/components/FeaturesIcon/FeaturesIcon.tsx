import { FC } from 'react'

interface Props {
  icon: string
  content: string
}
const FeaturesIcon: FC<Props> = ({ icon, content }) => <img src={`${icon}.svg`} alt={content} />
export default FeaturesIcon
