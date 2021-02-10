import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldKeys } from '@sharedEnum/index';

import { ResultFormComponent } from './result-form.component';

describe('ResultFormComponent', () => {
  let component: ResultFormComponent;
  let fixture: ComponentFixture<ResultFormComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [FormBuilder],
      declarations: [ResultFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFormComponent);
    component = fixture.componentInstance;
    fb = TestBed.get(FormBuilder);
    component.formGroup = fb.group({
      [FieldKeys.gameDayId]: '',
      [FieldKeys.id]: [],
      [FieldKeys.homeTeamName]: [null, Validators.required],
      [FieldKeys.awayTeamName]: [null, Validators.required],
      [FieldKeys.homeScore]: [null, [Validators.required, Validators.pattern('^[0-9]\d*$')]],
      [FieldKeys.awayScore]: [null, [Validators.required, Validators.pattern('^[0-9]\d*$')]],
      [FieldKeys.date]: [null, Validators.required],
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
