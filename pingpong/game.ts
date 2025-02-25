// pingpong/game.ts
class Game {
    constructor(public player1: string, public player2: string) {}

    playPoint(): string {
        const winner = Math.random() > 0.5 ? this.player1 : this.player2;
        return `${winner} scores!`;
    }
}

const match = new Game("Bismark", "Opponent");
console.log(match.playPoint());
