import React from 'react';
import WordList from '../components/WordList';
import AddWordForm from '../components/AddWordForm';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Generation X Encyclopedia</h1>
            <AddWordForm />
            <WordList />
        </div>
    );
};

export default Home;