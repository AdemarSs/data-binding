import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProprtyComponent } from './input-proprty.component';

describe('InputProprtyComponent', () => {
  let component: InputProprtyComponent;
  let fixture: ComponentFixture<InputProprtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputProprtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputProprtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
