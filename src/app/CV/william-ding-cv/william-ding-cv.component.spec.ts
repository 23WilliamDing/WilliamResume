import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WilliamDingCVComponent } from './william-ding-cv.component';

describe('WilliamDingCVComponent', () => {
  let component: WilliamDingCVComponent;
  let fixture: ComponentFixture<WilliamDingCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WilliamDingCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WilliamDingCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
