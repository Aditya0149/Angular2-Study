import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHhttpComponent } from './my-hhttp.component';

describe('MyHhttpComponent', () => {
  let component: MyHhttpComponent;
  let fixture: ComponentFixture<MyHhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
