// pingpong/player.ts
interface PlayerStats {
    wins: number;
    losses: number;
}

class Player {
    constructor(public name: string, public stats: PlayerStats) {}

    updateStats(won: boolean): void {
        won ? this.stats.wins++ : this.stats.losses++;
    }

    getRecord(): string {
        return `${this.name}: ${this.stats.wins}-${this.stats.losses}`;
    }
}

const bismark = new Player("Bismark", { wins: 7, losses: 0 });
console.log(bismark.getRecord());
