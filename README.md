# 🌎 US Geography Quiz

An interactive browser-based quiz that tests your knowledge of U.S. geography through 10 varied questions. Fun, educational, and responsive — with instant feedback and score tracking!

## 🕹️ Game Features

- ✅ 10 diverse geography questions: multiple choice, checkboxes, and text inputs
- 📊 Tracks your score and attempts using local storage
- 🎯 Immediate feedback after each answer
- 🏆 Displays past scores and passing status
- 💬 Includes correct answers for learning
- 🎨 Clean, colorful UI with Bootstrap 5 styling
- 🔁 Shuffle-based questions to keep it fresh each time

## 🚀 Live Demo

You can [Try it yourself](https://deborah-shaw.github.io/US-Geography-Quiz/).


## 🗂️ Project Structure

```text
📦 us-geography-quiz/
 ┣ 📁 css/
 ┃ ┗ 📄 style.css              # 💅 Custom styles
 ┣ 📁 img/
 ┃ ┗ 📄 checkmark.png, xmark.png   # ✔️❌ Feedback images
 ┣ 📁 js/
 ┃ ┗ 📄 script.js              # 🧠 Core game logic
 ┣ 📄 index.html               # 🏠 Main UI and quiz layout
 ┗ 📄 README.md                # 📖 Project info
```

## 🛠️ Tech Used

- HTML5 – Structuring the quiz interface
- CSS3 – Custom styling
- Bootstrap 5 – Responsive layout & design
- JavaScript – Handles quiz grading, validation, and feedback
- Underscore.js – For randomizing choices in some questions
- Local Storage – Tracks past scores and attempts

## ✅ How to Play

1. Answer all 10 geography questions.
2. Click "Submit Quiz".
3. See your score and whether you passed.
4. Check your past attempts in the sidebar.
5. Refresh or revisit the page to try again!

## 🧠 Behind the Scenes

This quiz uses:

- Math.random() and _.shuffle() for randomized options
- Event listeners and form validation for interactive play
- Local storage to preserve score history
- Conditional logic to handle multiple input types (text, select, checkboxes, radio)
- Bootstrap and semantic HTML for responsive UI

## 🐛 Known Issues

- 🖱️ Submit button is not disabled if required fields are missing
- ❗️ No reset button for full form clear (currently requires page refresh)
- 💬 Feedback icons can overlap on smaller screens

## 💡 Future Improvements

- 🔊 Sound effects on correct/wrong answers
- 📱 Improved mobile layout
- 🧩 Add difficulty modes or timed version
- 💾 High score leaderboard
- 🎨 Dark/light mode toggle

## 📄 License

This project is open source under the MIT License.
