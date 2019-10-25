export class Quotes{
showDetail :boolean;
constructor(
    public quote:string, 
    public author:string,
    public description:string, 
    public date :Date )
{this.showDetail =false}
}
