import { useState } from "react";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!feedback.trim()) {
      return;
    }

    setSubmittedFeedback(feedback.trim());
    setFeedback("");
  }

  return (
    <main className="container">
      <section className="feedback-card">
        <p className="eyebrow">PATCHFORALAN TEST APPLICATION</p>
        <h1>Feedback Form</h1>
        <p className="description">
          Share your feedback with our team.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="feedback">Your feedback</label>

          <textarea
            id="feedback"
            name="feedback"
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            required
          />

          <button type="submit">Submit Feedback</button>
        </form>

        {submittedFeedback && (
          <div className="success-message" role="status">
            <strong>Feedback submitted successfully!</strong>
            <p>{submittedFeedback}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;