import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSampleComponent } from './inner-sample.component';

describe('InnerSampleComponent', () => {
  let component: InnerSampleComponent;
  let fixture: ComponentFixture<InnerSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
