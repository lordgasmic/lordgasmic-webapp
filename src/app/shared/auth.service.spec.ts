import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';

describe('AuthService: modify x-auth-token', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
