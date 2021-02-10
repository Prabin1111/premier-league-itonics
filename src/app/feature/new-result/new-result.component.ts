import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResultFormLabelConstants } from '@sharedConstant/index';
import { ClubsModel } from '@sharedModel/index';
import { DataBusService } from '@sharedService/data-bus/data-bus.service';
import { UUIDService } from 'src/app/shared/service/UU-id/uuid.service';
import { FormLabel } from './model/lable.model';
import { NewResultService } from './service/api/new-result/new-result.service';
import { NewResultFormService } from './service/form/new-result-form/new-result-form.service';

@Component({
  selector: 'app-new-result',
  templateUrl: './new-result.component.html',
  styleUrls: ['./new-result.component.scss']
})
export class NewResultComponent implements OnInit, OnDestroy {
  pageTitle = "New Result";
  isSubmit: boolean = false;
  formLabel : FormLabel = ResultFormLabelConstants;

  clubList: ClubsModel | undefined;

  constructor(public form: NewResultFormService,
    private _newResultService: NewResultService,
    private _UUIDService: UUIDService,
    private _dataService: DataBusService
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getClubList();

  }

  buildForm(): void {
    this.form.buildNewResultForm();
    this.checkUpdateStatus();
  }

  getClubList(): void {
    this._newResultService.getClubList().subscribe((data: ClubsModel) => {
      this.clubList = data;
    })
  }

  newResult() {
    this.isSubmit = true;
    if (this.form.formGroup.valid) {
      this._newResultService.saveNewResult(this.form.formGroup.value);
      this.clearDataAndForm();
    }
  }

  checkUpdateStatus(): void {
    if (this._dataService.upDateStatus && this._dataService.gameDetails) {
      this.form.formGroup.patchValue(this._dataService.gameDetails);
    }
  }

  clearDataAndForm(): void {
    this.isSubmit = false;
    this.form.resetForm();
    this._dataService.upDateStatus = false;
    this._dataService.gameDetails = undefined;
  }

  ngOnDestroy() {
      this.clearDataAndForm();
      this._dataService.oldGameDetails = undefined;
  } 


}
