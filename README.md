
## 🌞 Daily Motivation Dashboard

A minimal and elegant React-based web application that delivers daily motivation through random quotes. Users can like, save, and revisit their favorite quotes, with data persistence using localStorage.

---

## 🚀 Features

🔄 Fetch random motivational quotes from an API

❤️ Like / Unlike quotes

📊 Live count of liked quotes

💾 Persistent storage using localStorage (data stays after refresh)

📋 View all saved quotes

⏳ Loading state handling

🎯 Clean and responsive UI (coffee/mocha theme)

---

## 🧠 Concepts Used

This project demonstrates core React concepts:

useState (state management)

useEffect (API calls & lifecycle)

Conditional Rendering

Event Handling

Array state updates (add/remove items)

localStorage integration

Responsive design using CSS

---

## 🛠️ Tech Stack

React (with Vite)

JavaScript (ES6+)

CSS (custom styling)

DummyJSON API (for quotes)

---

## 🌐 Live Demo

👉 https://motivation-dashboard-silk.vercel.app/ 

---

## 📂 Project Structure

motivation-dashboard/
│── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│
│── public/
│── package.json
│── README.md

---


## 🎯 How It Works

On initial load, a random quote is fetched using useEffect

Users can fetch new quotes using a button

Clicking "Like" stores the quote in state

Liked quotes are saved in localStorage

Saved quotes persist even after refreshing the page

---

## ⚠️ Challenges Faced

Faced issues with unreliable APIs and CORS restrictions

Resolved by switching to a stable API (DummyJSON)

Improved UI consistency by preventing layout shifts during loading

---

## 🤖 Acknowledgment

Used AI assistance for UI design inspiration and debugging certain issues

Core logic, implementation, and understanding were done independently

---

👩🏻‍💻 Author

Sohangi Singh


