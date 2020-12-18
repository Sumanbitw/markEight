import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "winking",
  "🐒": "monkey",
  "😃": "grinning with big eyes",
  "😜": "winking face with tongue",
  "🐺": "wolf",
  "🎄": "Christmas tree",
  "🎅": "Santa claus",
  "🎅": "Smiling face with Halo",
  "😍": "Smiling face with heart eyes",
  "😐": "Neutral Face",
  "😶": "Face without mouth",
  "🐩": "Poodle",
  "🐫": "Two-Hump camel",
  "🐥": "Front-Facing Baby chick",
  "💢": "Anger Symbol",
  "💬": "Speech baloon",
  "🤣": "Rooling on the floor",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userMeaning = event.target.value;
    var meaning = emojiDictionary[userMeaning];

    if (meaning === undefined) {
      meaning = "We dont have that in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="app">
      <div className="app__header">
        <h2> Emojipedia </h2>
        <h2>Guess the emoji 👇</h2>
      </div>
      <div className="app__input">
        <input
          className="app__input"
          placeholder="Search Emoji"
          onChange={emojiInputHandler}
        />
      </div>
      <div className="app__meaning">{meaning}</div>
      <div className="app__emojiList">
        {emojisWeKnow.map((emoji) => (
          <span
            className="app__emojis"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </div>
      <div className="app__footercolor">About Emojipedia</div>
      <div className="app__footercolor">
        <p>
          Emojipedia is a place where all the meaning of the emojis are
          explained.
        </p>
      </div>
    </div>
  );
}
