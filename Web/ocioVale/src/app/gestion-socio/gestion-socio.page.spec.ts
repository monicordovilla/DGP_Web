import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionSocio } from './gestion-socio.page';

describe('GestionSocio', () => {
  let component: GestionSocio;
  let fixture: ComponentFixture<GestionSocio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSocio ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionSocio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
