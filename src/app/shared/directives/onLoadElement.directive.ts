import {Directive, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[onLoadElement]'
})
export class OnLoadElementDirective {

  @Input() isLast: boolean;

  @Output('onLoadElement') onLoadElement: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
      setTimeout(() => this.onLoadElement.emit(), 10);    
  }
}