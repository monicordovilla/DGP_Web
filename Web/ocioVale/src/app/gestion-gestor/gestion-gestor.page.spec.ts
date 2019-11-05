import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionGestor } from './gestion-gestor.page';

describe('GestionGestor', () => {
  let component: GestionGestor;
  let fixture: ComponentFixture<GestionGestor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionGestor ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionGestor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
