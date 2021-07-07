import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideoComponent } from './section-video.component';

describe('SectionVideoComponent', () => {
  let component: SectionVideoComponent;
  let fixture: ComponentFixture<SectionVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
