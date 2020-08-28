import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'
import { getLocaleDateFormat, FormatWidth, getLocaleId } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent implements OnInit {

  ngOnInit(): void
  {
    this.DiaDeHoje()
  }

  public nome : String = "";
  public showButton : boolean = false;

  public contadorClique : number = 0;
  public urlImagem : string = "https://www.youtube.com/watch?v=3UyhjqMVMfg&list=RD3UyhjqMVMfg&start_radio=1.jpg";

  adicionarClique(){
    this.contadorClique ++;
  }
  
  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event : any){
    this.nome = event.target.value;    
  }  


  DiaDeHoje()
  {
    let DataFerias = new Date(2020,7,20).getDate()
    console.log(DataFerias);
    let DataAtual = new Date().getDate();    
    console.log(DataAtual);

    if(DataFerias + 3 >= DataAtual)
    {
      this.showButton = false;
      console.log(false);
    }
    else{
      this.showButton = true;
      console.log(true);
    }
  }
}
