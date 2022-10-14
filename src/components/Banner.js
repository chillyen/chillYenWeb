import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Coder.", "Designer.", "Web3 Lover." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-stretch">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible = "animate__animated animate__fadeIn animate__slower" }>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{"Hi! This is Chillyen,"}</h1>
                <h1>{`I'm`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Coder.", "Designer.", "Web3 Lover." ]'><span className="wrap">{text}</span></span></h1>                
                  <p>I studied electrical engineering in college, but I prefer designing dynamic web and 3D games, studying information security, developing Raspberry Pi, researching decentralized blockchain etc.</p> 
                  <p>Besides being a program nerd at home, I also enjoy taking pictures, surfing, riding, running, and doing things that are meaningless but fun.</p>
                  <button onClick={() => console.log('contact')}><a href="https://www.google.com/">Let’ Get Out Here<ArrowRightCircle size={25} /></a></button>                              
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible = "animate__animated animate__zoomIn animate__slow" }>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
