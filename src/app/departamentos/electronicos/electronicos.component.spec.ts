import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicosComponent } from './electronicos.component';

describe('ElectronicosComponent', () => {
  let component: ElectronicosComponent;
  let fixture: ComponentFixture<ElectronicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
