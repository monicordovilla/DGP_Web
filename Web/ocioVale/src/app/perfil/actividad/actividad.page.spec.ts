import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { actividad } from './actividad.page';

describe('actividad', () => {
  let component: actividad;
  let fixture: ComponentFixture<actividad>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ actividad ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(actividad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
