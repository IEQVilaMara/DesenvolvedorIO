import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

public nome : string = "Meu projeto está começando a ficar bom";

MeuProjeto(){
  this.nome = "Meu projeto está começando a ficar bom"
}

}
