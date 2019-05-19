import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubsComponent } from './bubs.component';

describe('BubsComponent', () => {
  let component: BubsComponent;
  let fixture: ComponentFixture<BubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
