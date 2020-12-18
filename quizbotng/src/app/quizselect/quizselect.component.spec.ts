import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizselectComponent } from './quizselect.component';

describe('QuizselectComponent', () => {
  let component: QuizselectComponent;
  let fixture: ComponentFixture<QuizselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
