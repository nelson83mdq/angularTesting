import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-param',
  templateUrl: './parametric.component.html',
  styleUrls: ['./parametric.component.css']
})
export class ParametricComponent {
  @Input() options?: string[]; // deberia ser un array que construya un menu botones
  /*
    menu: string[] = ['stock', 'fecha', 'registros'];
  */
  //@Output() onClick?: EventEmitter<any>; //un evento determinado
  //public optionsLen: number = this.options.lenght;

  ngViewAfterInit(){
    console.log(this.options);
  }

  ngOnInit(){
    console.log('componente renderizado');
    console.log(this.options);
    
    
  }

}
