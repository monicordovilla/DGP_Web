import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantesPage } from './participantes.page';

describe('ParticipantesPage', () => {
  let component: ParticipantesPage;
  let fixture: ComponentFixture<ParticipantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
