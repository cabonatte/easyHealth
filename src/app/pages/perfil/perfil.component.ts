import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfis;


  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/profissional").subscribe(
      (dados) => {
        this.perfis = dados;
        console.log(dados);
    
      }
  )
   }

  ngOnInit() {
  }

}
