import DisplayCards from "./components/DisplayCards/DisplayCards"

const Features = ()=>(
    <div className="p-8 box-border mx-auto bg-white text-black bg-[#EBF1F6]">
        <h2>Features</h2>
        <div className="flex">
            <DisplayCards/>
            <div>
                <img src="/featureImage.svg" alt="featureImage" />
            </div>
        </div>
        
    </div>
)
export default Features