
export class ProjectModel {
    public readonly title: string;
    public readonly subtitle: string;
    public readonly description: string;
    public readonly imageUrls: [string];
    public readonly videoUrl: string;
    public readonly links: [{label: string, url: string}];

    constructor(title: string,
                subtitle: string,
                description: string,
                imageUrls: [string],
                videoUrl?: string,
                links?: [{label: string, url: string}]) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.imageUrls = imageUrls;
        this.videoUrl = videoUrl;
        this.links = links;
    }
}
