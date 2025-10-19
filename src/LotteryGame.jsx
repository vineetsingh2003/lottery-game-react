import { useState } from "react";
import "./LotteryGame.css";

function LotteryGame() {
    const [ticket, setTicket] = useState(null);
    const [result, setResult] = useState(null);

    function generateTicket() {
        const newTicket = Math.floor(Math.random() * 900) + 100;
        const digit1 = Math.floor(newTicket / 100);
        const digit2 = Math.floor((newTicket % 100) / 10);
        const digit3 = newTicket % 10;
        const sum = digit1 + digit2 + digit3;
        
        setTicket(newTicket);
        setResult(sum === 15);
    }

    return (
        <div className="lottery-container">
            <div className="lottery-card">
                <h1 className="title">Lottery Game</h1>
                
                <div className="content">
                    <p className="instructions">
                        Win if your digits sum to 15!
                    </p>
                    <button 
                        className="btn" 
                        onClick={generateTicket}
                    >
                        Generate Ticket
                    </button>
                </div>

                {ticket !== null && (
                    <div className="ticket-section">
                        <div className="ticket-display">
                            <p className="ticket-label">Your Ticket</p>
                            <p className="ticket-number">{ticket}</p>
                        </div>

                        <div className={`result-box ${result ? 'win' : 'lose'}`}>
                            <p className="result-text">
                                {result 
                                    ? '🎉 Congratulations! You won!' 
                                    : '😔 Better luck next time!'}
                            </p>
                        </div>
                    </div>
                )}

                {ticket === null && (
                    <div className="no-ticket">
                        <p>Click the button to generate your first ticket!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LotteryGame;