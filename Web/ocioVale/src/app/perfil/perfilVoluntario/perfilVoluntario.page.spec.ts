import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { perfilVoluntario } from './perfilVoluntario.page';

describe('perfilVoluntario', () => {
  let component: perfilVoluntario;
  let fixture: ComponentFixture<perfilVoluntario>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ perfilVoluntario ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(perfilVoluntario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
