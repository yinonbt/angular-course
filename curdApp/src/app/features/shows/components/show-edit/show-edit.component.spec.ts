import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditComponent } from './show-edit.component';

describe('ShowEditComponent', () => {
  let component: ShowEditComponent;
  let fixture: ComponentFixture<ShowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
