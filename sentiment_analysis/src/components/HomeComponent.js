import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCSS.css'
function Home({isLoggedIn}) {
    return (
        <div className="container mt-5">
            <h1>Welcome to Twitter Sentiment Analysis</h1>
            <p>
                This application performs sentiment analysis on tweets to classify them as positive or negative. It uses machine learning techniques to analyze the sentiment expressed in the text of the tweets and provides insights into the overall sentiment of the dataset.
            </p>
            <h2>Features:</h2>
            <ul>
                <li>Dataset Analysis: Perform sentiment analysis on a pre-existing dataset of tweets.</li>
                <li>Tweet Analysis: Provide a tweet text and get its sentiment classification.</li>
                <li>Data Visualization: Visualize sentiment analysis results using charts, graphs, or word clouds.</li>
                <li>Export and Save Results: Save and export sentiment analysis results for further analysis or reporting.</li>
            </ul>
            <h2>How to Use:</h2>
            <ol>
                <li>Enter a tweet text in the input field to analyze its sentiment classification.</li>
                <li>Click the "Analyze" button to perform sentiment analysis on the provided tweet.</li>
                <li>View the sentiment analysis result, which will classify the tweet as positive or negative.</li>
                <li>Explore additional features like data visualization and exporting results.</li>
            </ol>
            <p>
                By analyzing the sentiment of tweets, you can gain insights into public opinion, track brand sentiment, or understand the sentiment expressed in specific tweets. Start analyzing tweet sentiments now and discover valuable insights from your dataset.
            </p>
            {isLoggedIn ? (
                <Link to="/search" className="btn  bttn">Get Started</Link>
            ) : (
                <Link to="/login" className="btn bttn">Get Started</Link>)}
        </div>
    )
}

export default Home;