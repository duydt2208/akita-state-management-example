import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubiksComponent } from './rubiks.component';

describe('RubiksComponent', () => {
  let component: RubiksComponent;
  let fixture: ComponentFixture<RubiksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubiksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubiksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
