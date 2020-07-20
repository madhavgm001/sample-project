import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableWrapperComponent } from './custom-table-wrapper.component';

describe('CustomTableWrapperComponent', () => {
  let component: CustomTableWrapperComponent;
  let fixture: ComponentFixture<CustomTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
