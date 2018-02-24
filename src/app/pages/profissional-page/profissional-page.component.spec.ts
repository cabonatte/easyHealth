import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalPageComponent } from './profissional-page.component';

describe('ProfissionalPageComponent', () => {
  let component: ProfissionalPageComponent;
  let fixture: ComponentFixture<ProfissionalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfissionalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfissionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
