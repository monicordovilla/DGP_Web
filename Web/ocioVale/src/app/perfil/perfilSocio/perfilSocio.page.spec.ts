import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { perfilSocio } from './perfilSocio.page';

describe('perfilSocio', () => {
  let component: perfilSocio;
  let fixture: ComponentFixture<perfilSocio>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ perfilSocio ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(perfilSocio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
