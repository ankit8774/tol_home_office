import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfaceAIComponent } from './editface-ai.component';

describe('EditfaceAIComponent', () => {
  let component: EditfaceAIComponent;
  let fixture: ComponentFixture<EditfaceAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfaceAIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfaceAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
