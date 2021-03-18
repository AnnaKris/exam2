import { Component, Output,EventEmitter,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string="";
  ev:any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(
      this.el.nativeElement.ownerDocument.body,
      "backgroundColor",
      "rgba(214, 204, 198, 0.46) "
    );
  }
  
  testClick(e:any)
  {
    this.name=e.target.textContent;

  }
  
}
