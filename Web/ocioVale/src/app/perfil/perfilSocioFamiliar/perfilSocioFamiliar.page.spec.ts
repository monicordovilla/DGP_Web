import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { perfilSocioFamiliar } from './perfilSocioFamiliar.page';

describe('perfilSocioFamiliar', () => {
  let component: perfilSocioFamiliar;
  let fixture: ComponentFixture<perfilSocioFamiliar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ perfilSocioFamiliar ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(perfilSocioFamiliar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
