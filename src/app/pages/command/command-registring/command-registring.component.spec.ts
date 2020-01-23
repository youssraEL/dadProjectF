import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandRegistringComponent } from './command-registring.component';

describe('CommandRegistringComponent', () => {
  let component: CommandRegistringComponent;
  let fixture: ComponentFixture<CommandRegistringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandRegistringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandRegistringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
