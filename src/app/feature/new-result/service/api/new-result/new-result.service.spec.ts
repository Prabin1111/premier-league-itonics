import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientService } from '@coreService/http-client/http-client.service';
import { LocalStorageService } from '@coreService/storage-service/local-storage.service';
import { DataBusService } from '@sharedService/data-bus/data-bus.service';
import { LeagueTableService } from '@sharedService/league-table/league-table.service';
import { UUIDService } from '@sharedService/UU-id/uuid.service';

import { NewResultService } from './new-result.service';

describe('NewResultService', () => {
  let service: NewResultService;
  let httpClient: HttpClientService;
  let uuIDService: UUIDService;
  let storageService: LocalStorageService;
  let leagueTableService: LeagueTableService;
  let dataService: DataBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService, UUIDService, LocalStorageService, LeagueTableService, DataBusService]
    });
    service = TestBed.inject(NewResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
