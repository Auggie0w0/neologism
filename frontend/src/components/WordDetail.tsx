import React from 'react';
import { useParams } from 'react-router-dom';

const WordDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [word, setWord] = React.useState<{ term: string; definition: string } | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const fetchWordDetail = async () => {
            try {
                const response = await fetch(`/api/words/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch word details');
                }
                const data = await response.json();
                setWord(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWordDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!word) {
        return <div>No word found.</div>;
    }

    return (
        <div>
            <h2>{word.term}</h2>
            <p>{word.definition}</p>
        </div>
    );
};

export default WordDetail;