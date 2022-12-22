import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInviteComponent } from './profile-invite.component';

describe('ProfileInviteComponent', () => {
  let component: ProfileInviteComponent;
  let fixture: ComponentFixture<ProfileInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
