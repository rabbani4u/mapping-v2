import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}

        {/* <Card
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        />
        <Card
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />
        <Card
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          meaning={emojipedia[2].meaning}
        /> */}
      </dl>
    </div>
  );
}

export default App;
