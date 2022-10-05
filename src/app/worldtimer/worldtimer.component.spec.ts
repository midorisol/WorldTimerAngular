import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtimerComponent } from './worldtimer.component';

describe('WorldtimerComponent', () => {
  let component: WorldtimerComponent;
  let fixture: ComponentFixture<WorldtimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldtimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
