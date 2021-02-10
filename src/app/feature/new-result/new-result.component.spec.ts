import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataBusService } from '@sharedService/data-bus/data-bus.service';
import { UUIDService } from '@sharedService/UU-id/uuid.service';

import { NewResultComponent } from './new-result.component';
import { NewResultService } from './service/api/new-result/new-result.service';
import { NewResultFormService } from './service/form/new-result-form/new-result-form.service';

describe('NewResultComponent', () => {
  let component: NewResultComponent;
  let fixture: ComponentFixture<NewResultComponent>;
  let form: NewResultFormService;
  let newResultService: NewResultService;
  let uuIDService: UUIDService;
  let dataService: DataBusService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,HttpClientTestingModule, RouterTestingModule],
      providers: [NewResultFormService, NewResultService, UUIDService, DataBusService],
      declarations: [NewResultComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
