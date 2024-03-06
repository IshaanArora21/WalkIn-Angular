import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkincardComponent } from './walkincard.component';

describe('WalkincardComponent', () => {
  let component: WalkincardComponent;
  let fixture: ComponentFixture<WalkincardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkincardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkincardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
