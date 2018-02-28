import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploadModule } from "angular2-image-upload";


@Component({
  selector: 'app-profissional-page',
  templateUrl: './profissional-page.component.html',
  styleUrls: ['./profissional-page.component.scss']
  
})
export class ProfissionalPageComponent implements OnInit {
  usuario = {
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmaSenha: ""
  };

  perfilProfissional = {
    perfil: {
      imagem: ''//foto de perfil     
      },
      endereco: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: ""
      },

      dadosPessoais: {
      cpf: "",
      rg: "",
      dataNascimento: "",
      genero: "",
      telefoneCelular: "",
      telefoneFixo: ""
      }, 
      disponibilidade: {
      diasSemana: "",
      periodo: "",
      bairros: ""
      },
      dadosProfissionais: {
      especialidades: "", // especialidades selecionadas
      formacao: "",
      detalhes: "",
      valor:""
      }
  }
  constructor(public http: HttpClient) { }
  
  inserir(){

    let cadastro = {
      usuario: this.usuario,
      perfilProfissional: this.perfilProfissional
    }

    this.http.post('http://localhost:3000/cadastro', cadastro)
    .subscribe((dadoss) => {
      console.log(dadoss)
    });
  }
  ngOnInit() {
  }

}
