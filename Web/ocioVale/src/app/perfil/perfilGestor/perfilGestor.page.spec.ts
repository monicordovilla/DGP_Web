import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { perfilGestor } from './perfilGestor.page';

describe('perfilGestor', () => {
  let component: perfilGestor;
  let fixture: ComponentFixture<perfilGestor>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ perfilGestor ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(perfilGestor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
