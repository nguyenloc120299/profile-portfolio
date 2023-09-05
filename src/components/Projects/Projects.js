import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import snailhouse from "../../Assets/Projects/snailhouse.png";
import snailhousedao from '../../Assets/Projects/snailhousedao.png'
import minigame from "../../Assets/Projects/minigame.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import votebattle from '../../Assets/Projects/photo_2022-11-22_17-33-36.jpg'
import phone_mall from '../../Assets/Projects/phone_mall.png'
import toidireview from '../../Assets/Projects/toidireviews.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://wallet.poolsmobility.com/assect/images/banner_home.png"}
              isBlog={false}
              isGithub={false}
              title="Pools Wallet"
              description="I have used technologies such as Ionic ReactJS, Scss, EtherJs..."
              demoLink="https://play.google.com/store/apps/details?id=com.wallet.pools"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/2jNDyt3VDQIs1ci-pF-BKnTbyLrWVN5TE-4sqUH7tNLcgadJADXYY469Xn0-ykbxeNip=w240-h480-rw"}
              isBlog={false}
              isGithub={false}
              title="Friendify Ai"
              description="I have used technologies such as NextJS, Redux Toolkit, Tailwind CSS"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://app.friendify.ai/welcome"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toidireview}
              isBlog={false}
              isGithub={false}
              title="Tôi Đi Reviews"
              description="I have utilized technologies such as ReactJS, Chakra UI, Redux Thunk, and ExpressJS in the project that is currently under development and nearing completion. The focus has been on enhancing the user interface as well as refining various functionalities."
              ghLink="https://github.com/nguyenloc120299/toidireviews"
              demoLink="https://demo.nguyenlocdev.site/"
              isShow={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={votebattle}
              isBlog={false}
              isGithub={false}
              title="Vote Battle"
              description="I have used technologies such as ReactJS Tailwindcss DaisyUI Web3Js NesJs"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://votebattle.winery.finance/"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://poolsmobility.com/static/media/img.20771f67638693241d29.png"}
              isBlog={false}
              isGithub={false}
              title="POOLS PHONE Pre-Order"
              description="Project build width ReactJS, Boostrap, AntDesign, Web3Js "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://mall-test.poolsmobility.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minigame}
              isBlog={false}
              isGithub={false}
              title="Mini game"
              description="Project build width Canvas HTML5 JS "
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://rpsgame.world/Catch-The-Token-Minigame"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://pbs.twimg.com/media/Fa0TxcwVsAAGFHh?format=jpg&name=medium"}
              isBlog={false}
              isGithub={false}
              title="Snailhous NFT Market"
              description="Project build ReactJS Redux Thunk Antd"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://snailhouse.io/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snailhousedao}
              isBlog={false}
              title="Snailhouse DAO"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
