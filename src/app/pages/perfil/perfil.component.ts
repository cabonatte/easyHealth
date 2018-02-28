import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfis;
  closeResult: string;

  
  
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }


  // constructor(public http: HttpClient) {
  //   this.http.get("http://localhost:3000/profissional").subscribe(
  //     (dados) => { 
  //       this.perfis = dados;
  //       console.log(dados);
    
  //     }
  // )
  //  }

