import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { actividad } from './actividad.page';

describe('actividad', () => {
  let component: actividad;
  let fixture: ComponentFixture<actividad>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ actividad ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(actividad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
