import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateprofileEditComponent } from './candidateprofile-edit.component';

describe('CandidateprofileEditComponent', () => {
  let component: CandidateprofileEditComponent;
  let fixture: ComponentFixture<CandidateprofileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateprofileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateprofileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
