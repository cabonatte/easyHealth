import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaFormComponent } from './busca-form.component';

describe('BuscaFormComponent', () => {
  let component: BuscaFormComponent;
  let fixture: ComponentFixture<BuscaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
