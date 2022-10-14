import security from "../assets/img/imgSkill/undraw_safe_re_kiil.svg";
import VR from "../assets/img/imgSkill/undraw_game_world_re_e44j.svg";
import blockchain from "../assets/img/imgSkill/undraw_digital_currency_qpak.svg";
import web from "../assets/img/imgSkill/undraw_code_review_re_woeb.svg";
import raspberry from "../assets/img/imgSkill/undraw_server_cluster_jwwq.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';


export const Skills = () => {  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">                
                    <div className="skill-bx wow zoomIn">
                        <h2>My Skills</h2>
                        <p>
                          Interested in learning various programming languages or<br></br>
                          skills that must be learned under strong social pressure
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item0">
                                <img src={web} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item1">
                                <img src={VR} alt="Image" />
                                <h5>Unity Game Development</h5>
                            </div>
                            <div className="item2">
                                <img src={security} alt="Image" />
                                <h5>Network Security Test</h5>
                            </div>
                            <div className="item3">
                                <img src={raspberry} alt="Image" />
                                <h5>Raspberry Pi Development</h5>
                            </div>
                            <div className="item4">
                                <img src={blockchain} alt="Image" />
                                <h5>Smart Contract Writing</h5>
                            </div>
                        </Carousel>
                        </div>
                  </div>                  
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
