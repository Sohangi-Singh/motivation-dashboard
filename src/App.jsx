import { useState, useEffect } from "react";
const [darkMode, setDarkMode] = useState(false);

  <button onClick={() => setDarkMode(!darkMode)}>
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState([]);

  const fetchQuote = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Failed to fetch quote.");
      setAuthor("");
    }

    setLoading(false);
  };

  // load from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("likedQuotes");
    if (saved) {
      setLikedQuotes(JSON.parse(saved));
    }
    fetchQuote();
  }, []);

  // save to localStorage whenever likedQuotes changes
  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  const handleLike = () => {
    const current = `${quote} - ${author}`;

    if (likedQuotes.includes(current)) {
      setLikedQuotes(likedQuotes.filter(q => q !== current));
    } else {
      setLikedQuotes([...likedQuotes, current]);
    }
  };

  const isLiked = likedQuotes.includes(`${quote} - ${author}`);

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <h1>Daily Motivation Dashboard</h1>

      <p className="quote fade">
        {loading ? "Fetching quote..." : quote}
      </p>

      <p className="author">
        {loading ? "" : `— ${author}`}
      </p>

      <button onClick={fetchQuote} disabled={loading}>
        {loading ? "Fetching..." : "New Quote"}
      </button>

      <br /><br />

      <button onClick={handleLike}>
        {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <p>Liked Quotes: {likedQuotes.length}</p>

      <hr />

      <h3>Saved Quotes</h3>

      {likedQuotes.length === 0 ? (
        <p>No liked quotes yet</p>
      ) : (
        likedQuotes.map((q, index) => (
          <div className="saved-quote" key={index}>
          {q}
          </div>
        ))
      )}
    </div>
  );
}

export default App;