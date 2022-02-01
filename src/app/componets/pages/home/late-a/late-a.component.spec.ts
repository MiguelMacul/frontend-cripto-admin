import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateAComponent } from './late-a.component';

describe('LateAComponent', () => {
  let component: LateAComponent;
  let fixture: ComponentFixture<LateAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
