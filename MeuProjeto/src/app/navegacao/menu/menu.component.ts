import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public Nome : string;
  
  MeuNome(){
    this.Nome = "Marco Antonio Gonçalves Junior"
  }

}
