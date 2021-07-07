import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCoverComponent } from './section-cover.component';

describe('SectionCoverComponent', () => {
  let component: SectionCoverComponent;
  let fixture: ComponentFixture<SectionCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
