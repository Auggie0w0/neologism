import { Router } from 'express';
import WordsController from '../controllers/wordsController';

const router = Router();
const wordsController = new WordsController();

export function setRoutes(app: Router) {
    app.get('/api/words', wordsController.getAllWords.bind(wordsController));
    app.post('/api/words', wordsController.addWord.bind(wordsController));
    app.get('/api/words/:id', wordsController.getWordById.bind(wordsController));
}