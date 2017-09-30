import {
    BaseModel,
    Utils
} from 'app/core';

export class Project extends BaseModel {

    public categories: string[] = [];
    public description: string = '';
    public equipment: string = '';
    public images: string[] = [];
    public imageCount: number = 0;
    public name: string = '';
    public projectId: number = 0;
    public projects: Project[] = [];
    public title: string = '';
    public units: number = 0;

    public get thumbUrl(): string {
        return '/data/projects/images/{0}_thumb.jpg'.format(this.name);
    }

    constructor(data: any = null) {
        super('Project');
        this.parseObject(data, {
            ignore: [
                'projects'
            ]
        });

        if (data) {
            if (data.projects) {
                this.projects = data.projects.map((p) => {
                    return new Project(p);
                });
            }
        }

        this.images = [];
        for (let i = 0; i < this.imageCount; i++) {
            this.images.push('/data/projects/images/{0}_{1}.jpg'.format(this.name, i));
        }
    }
}
