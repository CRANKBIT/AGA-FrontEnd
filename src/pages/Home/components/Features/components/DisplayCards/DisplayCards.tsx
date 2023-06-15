import { FC } from 'react'

import FeatureCard from './components/FeatureCard/FeatureCard'

const DisplayCards: FC = () => (
  <div className="flex flex-wrap">
<<<<<<< HEAD
    <FeatureCard content="Easy Builder">
      <img src="./svg/featureCardIcon1.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Easy Embed">
      <img src="./svg/featureCardIcon2.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Export Responses">
      <img src="./svg/featureCardIcon3.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Always on Cloud">
      <img src="./svg/featureCardIcon4.svg" alt="" />
    </FeatureCard>
    <FeatureCard content="Instant Support">
      <img src="./svg/featureCardIcon5.svg" alt="" />
    </FeatureCard>
=======
    <FeatureCard icon="./svg/featureCardIcon1.svg" content="Builder" description="Easy Builder" />
    <FeatureCard icon="./svg/featureCardIcon2.svg" content="Embed" description="Easy Embed" />
    <FeatureCard icon="./svg/featureCardIcon3.svg" content="Responses" description="Export Responses" />
    <FeatureCard icon="./svg/featureCardIcon4.svg" content="Cloud" description="Always on Cloud" />
    <FeatureCard icon="./svg/featureCardIcon5.svg" content="Support" description="Instant Support" />
>>>>>>> 63dfb24890bfeb00af5c1997e2d12ccd4942a476
  </div>
)
export default DisplayCards
