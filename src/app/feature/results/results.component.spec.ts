import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DataBusService } from '@sharedService/data-bus/data-bus.service';
import { NavigationService } from '@sharedService/navigation/navigation.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { ResultsComponent } from './results.component';
import { ResultsService } from './service/results.service';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let resultsService: ResultsService;
  let navigationService: NavigationService;
  let dataBusService: DataBusService;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule,
        HttpClientTestingModule,SharedModule],
      declarations: [ResultsComponent],
      providers: [ResultsService, NavigationService, DataBusService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
