import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewResultFormService } from './new-result-form.service';

describe('NewResultFormService', () => {
  let service: NewResultFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule]
    });
    service = TestBed.inject(NewResultFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
