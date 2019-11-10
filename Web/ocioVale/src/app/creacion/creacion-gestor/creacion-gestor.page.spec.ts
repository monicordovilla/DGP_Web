import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearGestorPage } from './creacion-gestor.page';

describe('CrearGestorPage', () => {
  let component: CrearGestorPage;
  let fixture: ComponentFixture<CrearGestorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGestorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearGestorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
