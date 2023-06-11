import { FC } from 'react'

interface Props {
  description: string
}
const FeatureDescription: FC<Props> = ({ description }) => <div>{description}</div>
export default FeatureDescription
