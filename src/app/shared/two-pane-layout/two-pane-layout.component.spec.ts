import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPaneLayoutComponent } from './two-pane-layout.component';

describe('TwoPaneLayoutComponent', () => {
  let component: TwoPaneLayoutComponent;
  let fixture: ComponentFixture<TwoPaneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoPaneLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoPaneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
