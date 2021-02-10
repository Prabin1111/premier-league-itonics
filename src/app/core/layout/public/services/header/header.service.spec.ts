import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientService } from '@coreService/http-client/http-client.service';
import { HeaderListModel } from '@sharedModel/index';
import { of } from 'rxjs';


describe('HeaderListService', () => {
  let service: HeaderService;
  let httpClientService: HttpClientService;

  const headerList: HeaderListModel = {
    totalHeaders: 3,
    headers: [
      {
        title: "Results",
        path: "/results"
      }
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeaderService, HttpClientService]
    });
    service = TestBed.get(HeaderService);
    httpClientService = TestBed.get(HttpClientService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get service fee', () => {

    spyOn(httpClientService, 'get').and.returnValue(of(headerList));
    service.getHeaderList().subscribe((data: HeaderListModel) => {
      expect(headerList).toEqual(data);
    });
  });
});
