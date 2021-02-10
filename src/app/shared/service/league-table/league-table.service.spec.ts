import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientService } from '@coreService/http-client/http-client.service';
import { LocalStorageService } from '@coreService/storage-service/local-storage.service';

import { LeagueTableService } from './league-table.service';

describe('LeagueTableService', () => {
  let service: LeagueTableService;
  let storageService: LocalStorageService;
  let httpClient: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeagueTableService, LocalStorageService, HttpClientService]
    });
    service = TestBed.get(LeagueTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
