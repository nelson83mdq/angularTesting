import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  public  aSubject = new Subject<any>();
  // creo un observable subject

  @ViewChild('aButton') boton: any;
  public onClickBtn: any = this.subjectClick;  //propiedad a un metodo particular
  
  private firstObserver = this.aSubject.subscribe(x => console.log('firstObserver: ', x));
  //dentro del subscribe indico que quiero hacer con el valor que me proporciona el aSubject
  private secondObserver = this.aSubject.subscribe(x => console.log('secondObserver: ', x));
  private thirdObserver = this.aSubject.subscribe(() => 
    console.log('thirdObserver: ', 'that great, thanks for telling me!')
    // aca directamente no hago nada
  );

  ngOnInit(){

  }

  subjectClick(){
    this.aSubject.next(100);
    //cuando aSubject ejecuta next, el valor dentro le llega a los observadores!
  }

  changeClick(){
    console.log('Este metodo cambio, ');
    
  }


  modName(){
    console.log("Redirected with @ViewChild");
    //console.log(this.boton);
    this.boton.nativeElement.innerText = 'Modified!';
    //accedo a las propiedades del boton, y cambio su nombre!
  }

  changeEvent(){
    //referencio a otro evento distinto
    this.onClickBtn = this.changeClick;
    //console.log('cambio evento', this.onClickBtn);
  }



  ngAfterViewInit(){
    
  };
}
