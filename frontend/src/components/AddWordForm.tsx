import React, { useState } from 'react';

const AddWordForm: React.FC = () => {
    const [term, setTerm] = useState('');
    const [definition, setDefinition] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newWord = { term, definition };

        try {
            const response = await fetch('/api/words', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newWord),
            });

            if (response.ok) {
                // Clear the form
                setTerm('');
                setDefinition('');
                // Optionally, you can add logic to refresh the word list or show a success message
            } else {
                // Handle error response
                console.error('Failed to add word');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="term">Term:</label>
                <input
                    type="text"
                    id="term"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="definition">Definition:</label>
                <textarea
                    id="definition"
                    value={definition}
                    onChange={(e) => setDefinition(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Word</button>
        </form>
    );
};

export default AddWordForm;