import FeatureCard from "./components/FeatureCard/FeatureCard"


const DisplayCards = ()=>(
    <div className="flex flex-wrap">
        <FeatureCard icon="/featureCardIcon1" content="Builder" description="Easy Builder"/>
        <FeatureCard icon="/featureCardIcon2" content="Embed" description="Easy Embed"/>
        <FeatureCard icon="/featureCardIcon3" content="Responses" description="Export Responses"/>
        <FeatureCard icon="/featureCardIcon4" content="Cloud" description="Always on Cloud"/>
        <FeatureCard icon="/featureCardIcon5" content="Support" description="Instant Support"/>
    </div>
)
export default DisplayCards