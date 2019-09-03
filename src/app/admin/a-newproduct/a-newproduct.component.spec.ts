import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANewproductComponent } from './a-newproduct.component';

describe('ANewproductComponent', () => {
  let component: ANewproductComponent;
  let fixture: ComponentFixture<ANewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
