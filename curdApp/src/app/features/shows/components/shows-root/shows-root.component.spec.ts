import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsRootComponent } from './shows-root.component';

describe('ShowsRootComponent', () => {
  let component: ShowsRootComponent;
  let fixture: ComponentFixture<ShowsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
