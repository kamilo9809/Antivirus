import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpportunityComponent } from './list-opportunity.component';

describe('ListOpportunityComponent', () => {
  let component: ListOpportunityComponent;
  let fixture: ComponentFixture<ListOpportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOpportunityComponent]
    });
    fixture = TestBed.createComponent(ListOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
