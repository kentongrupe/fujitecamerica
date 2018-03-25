import {
    BaseModel,
    Utils
} from 'app/core';
import {
    SelectItem
} from 'app/models';

export class Project extends BaseModel {

    public city: string = '';
    public description: string = '';
    public equipment: string = '';
    public imageCount: number = 0;
    public images: string[] = [];
    public name: string = '';
    public projects: Project[] = [];
    public units: SelectItem[] = [];
    public uuid: string = '';

    public get thumbUrl(): string {
        return '/data/projects/{0}/thumb.jpg'.format(this.uuid);
    }

    constructor(data: any = null) {
        super('Project');
        this.parseObject(data, {
            ignore: [
                'projects',
                'units'
            ]
        });

        if (data) {
            if (data.projects) {
                this.projects = data.projects.map((p) => {
                    return new Project(p);
                });
            }

            this.units = [];
            if (data.units) {
                for (let p in data.units) {
                    if (data.units[p] !== undefined) {
                        this.units.push({
                            label: p,
                            value: data.units[p]
                        });
                    }
                }
            }
        }

        this.images = [];
        for (let i = 0; i < this.imageCount; i++) {
            this.images.push('/data/projects/{0}/{1}.jpg'.format(this.uuid, i));
        }
    }
}
