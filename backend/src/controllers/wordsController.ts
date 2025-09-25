class WordsController {
    private words: Array<{ id: number; term: string; definition: string; createdAt: Date }> = [];
    private currentId: number = 1;

    public getAllWords(req: any, res: any): void {
        res.json(this.words);
    }

    public addWord(req: any, res: any): void {
        const { term, definition } = req.body;
        const newWord = {
            id: this.currentId++,
            term,
            definition,
            createdAt: new Date(),
        };
        this.words.push(newWord);
        res.status(201).json(newWord);
    }

    public getWordById(req: any, res: any): void {
        const { id } = req.params;
        const word = this.words.find(w => w.id === parseInt(id));
        if (word) {
            res.json(word);
        } else {
            res.status(404).json({ message: 'Word not found' });
        }
    }
}

export default WordsController;