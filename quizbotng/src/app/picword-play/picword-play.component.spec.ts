import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicwordPlayComponent } from './picword-play.component';

describe('PicwordPlayComponent', () => {
  let component: PicwordPlayComponent;
  let fixture: ComponentFixture<PicwordPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicwordPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicwordPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
