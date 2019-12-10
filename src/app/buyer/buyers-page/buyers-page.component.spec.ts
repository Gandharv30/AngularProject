import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersPageComponent } from './buyers-page.component';

describe('BuyersPageComponent', () => {
  let component: BuyersPageComponent;
  let fixture: ComponentFixture<BuyersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
