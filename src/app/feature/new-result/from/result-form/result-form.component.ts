import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClubsModel } from '@sharedModel/index';
import { FieldKeys } from '@sharedEnum/index';
import { shouldShowErrorMessage, getErrorMessage } from '@sharedUtil/form-validation/form-validation.util';
import { FormLabel } from '@newResult/model/lable.model';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss']
})
export class ResultFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() clubList: ClubsModel | undefined;
  @Input() formLabel!: FormLabel;
  @Input() isSubmit: boolean = false;

  shouldShowErrorMessage = shouldShowErrorMessage;
  getErrorMessage = getErrorMessage;

  fieldsKeys = FieldKeys;

  constructor() { }

  ngOnInit(): void {
    

  }

}
