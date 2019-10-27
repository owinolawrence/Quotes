export class Quotes{
showDescription :boolean;
constructor(
    public quote:string, 
    public author:string,
    public description:string, 
    public calenderDate :Date )
{this.showDescription =false ;}
}
