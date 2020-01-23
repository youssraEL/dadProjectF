import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisteringComponent } from './product-registering.component';

describe('ProductRegisteringComponent', () => {
  let component: ProductRegisteringComponent;
  let fixture: ComponentFixture<ProductRegisteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRegisteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegisteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
