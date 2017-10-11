import {Directive,HostListener,ElementRef} from '@angular/core';
@Directive({
    selector:'[appMyHighlighter]'
})
export class appMyHighlighterDirective{
    constructor(private el:ElementRef){}
    @HostListener('mouseenter',[$event])
    onmouseenter(event:any){
        const text=event.target.innertext;
        switch(text){
            case 'Bowler':
            this.highlight("Blue");
            break;
            case 'Batsman':
            this.highlight("Green");
            break;
            case 'Weeketkeeper':
            this.highlight("Maroon");
            break;
            default:
            this.highlight(null);
            break;
        }
    }
@HostListener('mouseleave') onmouseleave(){
    this.highlight(null);
}
private highlight (color:string){
    this.el.nativeElement.style.color=color;
}


}