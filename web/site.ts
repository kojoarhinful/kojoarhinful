// web/site.ts
interface Website {
    title: string;
    pages: number;
}

function launchSite(site: Website): string {
    return `${site.title} is live with ${site.pages} pages!`;
}

const mySite: Website = { title: "Bismark", pages: 3 };
console.log(launchSite(mySite));
