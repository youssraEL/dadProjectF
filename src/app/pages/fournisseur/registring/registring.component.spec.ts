import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistringComponent } from './registring.component';

describe('RegistringComponent', () => {
  let component: RegistringComponent;
  let fixture: ComponentFixture<RegistringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistringComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
