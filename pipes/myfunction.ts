export class MyfunctionFunction{
    currentDate:Date;
    public getCurrentDate():string{

        this.currentDate=new Date();

        const date=('0'+this.currentDate.getDate()).slice(-2);

        const month=('0'+this.currentDate.getMonth()+1).slice(-2);

        const year=this.currentDate.getFullYear();

        return `${year}- ${month}- ${date}`;
    }
}