import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAsyncComponent } from './my-async.component';

describe('MyAsyncComponent', () => {
  let component: MyAsyncComponent;
  let fixture: ComponentFixture<MyAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
