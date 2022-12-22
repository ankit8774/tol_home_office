import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningInviteeComponent } from './screening-invitee.component';

describe('ScreeningInviteeComponent', () => {
  let component: ScreeningInviteeComponent;
  let fixture: ComponentFixture<ScreeningInviteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningInviteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
