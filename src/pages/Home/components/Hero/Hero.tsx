import {Link} from "react-router-dom"

const Hero = ()=>(
    <div className="text-center ">
        <img className="mx-auto" src="/heroImage.svg" alt="HeroImage" />
        <div>Unleash the Power of Mechanic: Elevate Your Reports to Perfection!</div>
        <Link to = "/auth/signup">Get started by creating an account for FREE!</Link>
    </div>
)

export default Hero