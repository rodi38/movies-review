import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectRouteComponent } from './redirect-route.component';

describe('RedirectRouteComponent', () => {
  let component: RedirectRouteComponent;
  let fixture: ComponentFixture<RedirectRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectRouteComponent]
    });
    fixture = TestBed.createComponent(RedirectRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
