import {
    BaseModel,
    Utils
} from 'app/core';

export class Project extends BaseModel {

    public categories: string[] = [];
    public description: string = '';
    public imageUrl: string = '';
    public name: string = '';
    public projectId: number = 0;
    public projects: Project[] = [];

    constructor(data: any = null) {
        super('Project');
        this.parseObject(data);
    }
}
