export class Quotes{
showDescription :boolean;
constructor(
    public quote:string, 
    public author:string,
    public description:string, 
    public date :Date )
{this.showDescription =false}
}
