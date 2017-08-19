
export class ProjectModel {
    public readonly title: string;
    public readonly subtitle: string;
    public readonly description: string;
    public readonly mediaUrls: [string];

    constructor(title: string,
                subtitle: string,
                description: string,
                mediaUrls: [string]) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.mediaUrls = mediaUrls;
    }
}
