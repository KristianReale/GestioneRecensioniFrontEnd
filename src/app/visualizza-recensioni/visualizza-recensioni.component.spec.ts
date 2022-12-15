import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaRecensioniComponent } from './visualizza-recensioni.component';

describe('VisualizzaRecensioniComponent', () => {
  let component: VisualizzaRecensioniComponent;
  let fixture: ComponentFixture<VisualizzaRecensioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaRecensioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaRecensioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
