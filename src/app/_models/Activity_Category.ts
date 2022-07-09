export type GenericObject = { [key: string]: any };

export class Activity_Category {
    icon: string;
    color: string;
    friendly_name: string;

    constructor (data: GenericObject) {
        this.icon = data.icon;
        this.color = data.color;
        this.friendly_name = data.friendly_name
    }
}