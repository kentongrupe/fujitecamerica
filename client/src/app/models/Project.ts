import {
    BaseModel,
    Utils
} from 'app/core';

export class Project extends BaseModel {

    public categories: string[] = [];
    public description: string = '';
    public equipment: string = '';
    public imageUrl: string = '';
    public name: string = '';
    public projectId: number = 0;
    public projects: Project[] = [];
    public units: number = 0;

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
    }
}
