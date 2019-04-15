import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsCountComponent } from './shows-count.component';

describe('ShowsCountComponent', () => {
  let component: ShowsCountComponent;
  let fixture: ComponentFixture<ShowsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
