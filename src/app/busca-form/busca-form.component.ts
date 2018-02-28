import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';

@Component({
  selector: 'app-busca-form',
  templateUrl: './busca-form.component.html',
  styleUrls: ['./busca-form.component.scss']
})
export class BuscaFormComponent implements OnInit {

profissoes = ['-','Nutricionista', 'Educador Físico',
  'Personal Trainer', 'Professor Yoga', 'Nutrólogo'];

model = new Hero(18, 'Dr IQ', this.profissoes[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }


ngOnInit() {

}
}