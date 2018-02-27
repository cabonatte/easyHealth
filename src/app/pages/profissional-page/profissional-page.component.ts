import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    this.http.post('http://localhost:3000/cadastro', this.usuario)
    .subscribe((dadoss) => {
      console.log(dadoss)
    });
    this.http.post('http://localhost:3000/profissional', this.perfilProfissional)
    .subscribe((dados) => {
      console.log(dados)
    });
  }
  ngOnInit() {
  }

}
