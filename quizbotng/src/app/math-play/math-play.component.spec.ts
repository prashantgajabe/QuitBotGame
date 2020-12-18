import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathPlayComponent } from './math-play.component';

describe('MathPlayComponent', () => {
  let component: MathPlayComponent;
  let fixture: ComponentFixture<MathPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
