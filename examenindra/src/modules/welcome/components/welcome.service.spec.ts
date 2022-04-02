import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule } from '@angular/common/http/testing'
import { WelcomeService } from './welcome.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';

describe('WelcomeService', () => {
  let service: WelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [
        AppComponent
      ],
    });
    service = TestBed.inject(WelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
