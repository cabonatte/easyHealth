import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-busca-form',
  templateUrl: './busca-form.component.html',
  styleUrls: ['./busca-form.component.scss']
})
export class BuscaFormComponent implements OnInit {

profissoes = ['-','Nutricionista', 'Educador Físico',
  'Personal Trainer', 'Professor Yoga', 'Nutrólogo'];

estados = ['','Acre',
'Alagoas',
'Amapá',
'Amazonas',
'Bahia',
'Ceará',
'Distrito Federal',
'Espírito Santo',
'Goiás',
'Maranhão',
'Mato Grosso',
'Mato Grosso do Sul',
'Minas Gerais',
'Pará',
'Paraíba',
'Paraná',
'Pernambuco',
'Piauí',
'Rio de Janeiro',
'Rio Grande do Norte',
'Rio Grande do Sul',
'Rondônia',
'Roraima',
'Santa Catarina',
'São Paulo',
'Sergipe',
'Tocantins']  
model = new Hero(18, 'Dr IQ', this.profissoes[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }


dados;
constructor(public http: HttpClient) {
}

buscarDados(){
  this.http
    .get('http://localhost:3000/cidadesBR')
    .subscribe((resposta) => {
      this.dados = resposta;
    });
}




// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }


ngOnInit() {

}
}