import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaboviComponent } from './tabovi.component';

describe('TaboviComponent', () => {
  let component: TaboviComponent;
  let fixture: ComponentFixture<TaboviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaboviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaboviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
