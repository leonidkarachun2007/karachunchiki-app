import React from "react";
import "./Achievement.css";


const defaultAchievements = [
  {
    id: 1,
    name: "Professional newbies",
    description: "Complete the game at the easiest difficulty",
    percent: 95,
    image: "./Achievements_pic1.png",
  },
  {
    id: 2,
    name: "The ultimate bug killer",
    description: "Sometimes you just gotta kill em",
    percent: 93,
    image: "./Achievements_pic2.png",
  },
  {
    id: 3,
    name: "Nightly sniper",
    description: "Kill 10 players in a single night",
    percent: 68,
    image: "./Achievements_pic3.png",
  },
  {
    id: 4,
    name: "Star of respect",
    description: "Complete a mission perfectly",
    percent: 70,
    image: "./Achievements_pic4.png",
  },
  {
    id: 5,
    name: "Head collector",
    description: "Kill every type of enemy",
    percent: 56,
    image: "./Achievements_pic5.png",
  },
  {
    id: 6,
    name: "KABLOID",
    description: "Make the biggest bomb possible",
    percent: 50,
    image: "./Achievements_pic6.png",
  },
  {
    id: 7,
    name: "Armor up",
    description: "Upgrade armor to the maximum",
    percent: 42,
    image: "./Achievements_pic7.png",
  },
  {
    id: 8,
    name: "All done!",
    description: "Complete all side missions",
    percent: 34,
    image: "./Achievements_pic8.png",
  },
  {
    id: 9,
    name: "Mine farmer",
    description: "Upgrade armor to the maximum",
    percent: 20,
    image: "./Achievements_pic11.png",
  },
  {
    id: 10,
    name: "Get down!",
    description: "Help your teammate with a ping",
    percent: 15,
    image: "./Achievements_pic9.png",
  },
  {
    id: 11,
    name: "Freedom, against all odds",
    description: "Defeat the final boss",
    percent: 10,
    image: "./Achievements_pic10.png",
  },
];

export default function Achievement({
  achievements = defaultAchievements,
  title = "Achievements",
}) {
  return (
    <div className="achievements-wrapper">
      <h1 className="achievements-title">{title}</h1>
      <p className="achievements-count">
        Amount of achievements: {achievements.length}
      </p>

      {achievements.map((achievement) => (
        <div key={achievement.id} className="achievement-item">
          <div
            className="achievement-progress-fill"
            style={{ width: `calc(${achievement.percent}% - 100px)` }}
          />

          <div className="achievement-icon">
            <img src={achievement.image} alt={achievement.name} />
          </div>

          <div className="achievement-info">
            <p className="achievement-name">{achievement.name}</p>
            <p className="achievement-description">{achievement.description}</p>
          </div>

          <div className="achievement-percent">{achievement.percent}%</div>
        </div>
      ))}
      <div id='container_profile4'>
      <div className='previous'>
        <img src='./tabler-icon-chevron-left.png' alt='arrow'/>
        <p>Previous</p>
      </div>

      <div className='numbers'>
        <p style={{color: '#7BC74D'}}>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>...</p>
        <p>20</p>
      </div>

      <div className='next'>
        <p>Next</p>
        <img src='./tabler-icon-chevron-right.png' alt='arrow'/>
      </div>
    </div>
    
    </div>
  );
}
