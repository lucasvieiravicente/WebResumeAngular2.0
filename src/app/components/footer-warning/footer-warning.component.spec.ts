import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWarningComponent } from './footer-warning.component';

describe('FooterWarningComponent', () => {
  let component: FooterWarningComponent;
  let fixture: ComponentFixture<FooterWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
