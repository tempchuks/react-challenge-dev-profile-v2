import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import image from "../public/templegithub.jpg";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image={image} />
      <div className="data">
        <Intro
          int="
         I am a backend developer with a strong focus on server-side technologies and a hands-on approach to problem-solving. "
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skill={skills} />
      </div>
    </div>
  );
}

function Avatar({ image }) {
  return <img className="avatar" src={image} />;
}
function Intro({ int }) {
  return (
    <div>
      <h1>Temple Chukwuka</h1>
      <p className="data">{int}</p>
    </div>
  );
}
function Skill(props) {
  console.log(props);
  // console.log(color);
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
    </li>
  );
}
function SkillList(props) {
  return (
    <ul className="skill-list">
      <Skill color="red" skill="javascript" />
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} />
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
