import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.heading}</span>
      </dt>
      <dd>{props.des}</dd>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Card
          emoji="💪"
          heading="Tense Biceps"
          des="This is Two hands pressed together. Is currently very introverted, saying a prayer"
        />
        <Card
          emoji="🏆"
          heading="Person With Folded Hands"
          des="Here is or hoping for enlightenment. Is also used as a “high five” or to say thank you."
        />
        <Card
          emoji="🤣"
          heading="Rolling On The Floor, Laughing"
          des="This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly."
        />
      </dl>
    </div>
  );
}

export default App;
