export class Quotes {
    showDescription: boolean;
    upvote: number;
    downvote: number;
    constructor(
        public quote: string,
        public author: string,
        public description: string,
        public date: Date) 
        { this.showDescription = false; }
}
