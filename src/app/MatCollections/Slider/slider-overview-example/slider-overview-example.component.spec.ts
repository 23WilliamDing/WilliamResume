import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOverviewExampleComponent } from './slider-overview-example.component';

describe('SliderOverviewExampleComponent', () => {
  let component: SliderOverviewExampleComponent;
  let fixture: ComponentFixture<SliderOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
