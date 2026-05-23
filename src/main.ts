import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  logoFacebook, 
  logoGoogle, 
  logoTwitter, 
  eyeOutline, 
  eyeOffOutline, 
  checkmarkCircleOutline, 
  lockOpenOutline,
  checkmarkCircle,
  lockOpen,
  arrowBack,
  arrowBackOutline,
  phonePortraitOutline,
  mailOutline,
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  logoFacebook,
  logoGoogle,
  logoTwitter,
  eyeOutline,
  eyeOffOutline,
  checkmarkCircleOutline,
  checkmarkCircle,
  lockOpenOutline,
  lockOpen,
  arrowBack,
  arrowBackOutline,
  phonePortraitOutline,
  mailOutline,

});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
