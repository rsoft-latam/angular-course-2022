import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test5Component } from './test5.component';

describe('Test5Component', () => {
  let component: Test5Component;
  let fixture: ComponentFixture<Test5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
