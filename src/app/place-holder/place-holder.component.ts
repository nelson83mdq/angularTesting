import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent {
  @ViewChild('template1') template_1?: TemplateRef<any>;
  @ViewChild('template2') template_2?: TemplateRef<any>;
  // capturo las referencias a los contenedores que necesito
  public contenedor?: any ; //creo una propiedad para asignarla al outlet

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.contenedor = null;
    // inicio la propiedad vacia, no muestro nada
  }

  onRender1(){
    this.contenedor = this.template_1; 
    //asigno el template 1 a la propiedad
  }

  onRender2(){
    this.contenedor = this.template_2;
    //lo mismo pero con el 2
  }

}
