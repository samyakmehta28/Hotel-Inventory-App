import { TestBed } from '@angular/core/testing';
import {loginGuard} from './login.guard';
import { CanActivateFn } from '@angular/router';

describe('loginGuard', () => {
  let guard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(loginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
