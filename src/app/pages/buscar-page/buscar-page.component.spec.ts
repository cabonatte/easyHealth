import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPageComponent } from './buscar-page.component';

describe('BuscarPageComponent', () => {
  let component: BuscarPageComponent;
  let fixture: ComponentFixture<BuscarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
