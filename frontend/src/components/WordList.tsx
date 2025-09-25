import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WordList: React.FC = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await axios.get('/api/words');
                setWords(response.data);
            } catch (error) {
                console.error('Error fetching words:', error);
            }
        };

        fetchWords();
    }, []);

    return (
        <div>
            <h2>Word List</h2>
            <ul>
                {words.map((word) => (
                    <li key={word.id}>
                        <strong>{word.term}</strong>: {word.definition}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WordList;