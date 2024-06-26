import { InitService } from './init.service';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_SERVICE_CONFIG, APP_CONFIG } from './AppConfig/appconfig.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; 
import { requestInterceptor } from './request.interceptor';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatListModule } from '@angular/material/list';
import { importProvidersFrom } from '@angular/core';
import { GlobalErrorHandler } from './errorHandler.service';
import { ErrorHandler } from '@angular/core';

function initFactory(initService:InitService){
  return () => initService.init();
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), importProvidersFrom(MatListModule),
    provideHttpClient(withInterceptors([
      requestInterceptor
    ])),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide:ErrorHandler,
      useClass:GlobalErrorHandler
    },{
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    }, provideAnimationsAsync()
  ]
};
