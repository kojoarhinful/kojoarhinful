// web/api.ts
class ApiClient {
    constructor(private endpoint: string) {}

    async fetchData(): Promise<string> {
        return `Data fetched from ${this.endpoint}`;
    }
}

const client = new ApiClient("https://github.com/kojoarhinful");
client.fetchData().then(console.log);
