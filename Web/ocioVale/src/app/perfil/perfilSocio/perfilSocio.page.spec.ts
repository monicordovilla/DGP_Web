import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { perfilSocio } from './perfilSocio.page';

describe('perfilSocio', () => {
  let component: perfilSocio;
  let fixture: ComponentFixture<perfilSocio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ perfilSocio ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(perfilSocio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
