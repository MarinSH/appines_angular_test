import { TestBed } from '@angular/core/testing';

import { HpApiService } from './hp-api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('HpApiService', () => {
  let service: HpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HpApiService, provideHttpClient(withFetch())],
    });
    service = TestBed.inject(HpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
