import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroTimerPage } from './pomodoro-timer.page';

describe('PomodoroTimerPage', () => {
  let component: PomodoroTimerPage;
  let fixture: ComponentFixture<PomodoroTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroTimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
