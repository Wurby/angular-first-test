import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestStateComponent } from './best-state.component';

describe('BestStateComponent', () => {
  let component: BestStateComponent;
  let fixture: ComponentFixture<BestStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
