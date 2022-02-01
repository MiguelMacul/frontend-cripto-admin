import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteamComponent } from './iteam.component';

describe('IteamComponent', () => {
  let component: IteamComponent;
  let fixture: ComponentFixture<IteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
