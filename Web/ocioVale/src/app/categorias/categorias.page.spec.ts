import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Categorias } from './categorias.page';

describe('Categorias', () => {
  let component: Categorias;
  let fixture: ComponentFixture<Categorias>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categorias ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Categorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
