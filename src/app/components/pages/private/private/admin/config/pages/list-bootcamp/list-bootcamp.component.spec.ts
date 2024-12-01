import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBootcampComponent } from './list-bootcamp.component';

describe('ListBootcampComponent', () => {
  let component: ListBootcampComponent;
  let fixture: ComponentFixture<ListBootcampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBootcampComponent]
    });
    fixture = TestBed.createComponent(ListBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
