import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatStockComponent } from './creat-stock.component';

describe('CreatStockComponent', () => {
  let component: CreatStockComponent;
  let fixture: ComponentFixture<CreatStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
