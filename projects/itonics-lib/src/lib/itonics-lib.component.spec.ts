import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItonicsLibComponent } from './itonics-lib.component';

describe('ItonicsLibComponent', () => {
  let component: ItonicsLibComponent;
  let fixture: ComponentFixture<ItonicsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItonicsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItonicsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
