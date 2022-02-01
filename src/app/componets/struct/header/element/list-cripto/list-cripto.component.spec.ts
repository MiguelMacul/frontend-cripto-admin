import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCriptoComponent } from './list-cripto.component';

describe('ListCriptoComponent', () => {
  let component: ListCriptoComponent;
  let fixture: ComponentFixture<ListCriptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCriptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCriptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
