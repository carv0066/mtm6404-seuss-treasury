import React, { useEffect, useState } from 'react';
import '../Quotes.css';

function QuotesPage () {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://seussology.info/api/quotes')
            .then(response => response.json())
            .then(data => {
            console.log('API Data:', data);
            setQuotes(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching the quotes:', error);
            setError('Failed to load quotes');
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Quotes by Dr. Seuss</h1>
            <div className="quotes-container">
            {quotes.length > 0 ? (
                quotes.map(quote => (
                <div className="quote-item" key={quote.id}>
                    <p className='quote-text'>"{quote.text}"</p>
                </div>
                ))
            ) : (
                <p>No quotes available.</p>
            )}
            </div>
        </div>
        );
    }
    
export default QuotesPage;