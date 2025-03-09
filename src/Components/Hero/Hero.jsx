import hero_hand from '../Assets/hand_icon.png'
import hero_banner from '../Assets/hero_image.png'

import arrow_icon from "../Assets/arrow.png"
import '../Hero/Hero.css'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2>New arrivals only</h2>
                    <div>
                        <div className="hero-hand">
                            <p>new</p>
                            <img src={hero_hand} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    
                    <div className="hero-btn">
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero_banner} alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero