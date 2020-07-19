import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestringComponent } from './regestring.component';

describe('RegestringComponent', () => {
  let component: RegestringComponent;
  let fixture: ComponentFixture<RegestringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
