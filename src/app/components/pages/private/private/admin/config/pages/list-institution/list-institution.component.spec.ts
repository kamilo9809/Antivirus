import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstitutionComponent } from './list-institution.component';

describe('ListInstitutionComponent', () => {
  let component: ListInstitutionComponent;
  let fixture: ComponentFixture<ListInstitutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListInstitutionComponent]
    });
    fixture = TestBed.createComponent(ListInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
