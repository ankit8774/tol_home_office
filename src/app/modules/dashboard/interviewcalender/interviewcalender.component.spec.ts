import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewcalenderComponent } from './interviewcalender.component';

describe('InterviewcalenderComponent', () => {
  let component: InterviewcalenderComponent;
  let fixture: ComponentFixture<InterviewcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewcalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
