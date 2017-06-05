import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetTestComponent } from './headset-test.component';

describe('HeadsetTestComponent', () => {
  let component: HeadsetTestComponent;
  let fixture: ComponentFixture<HeadsetTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsetTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsetTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
