// import { async, TestBed } from '@angular/core/testing';
// import { IonicModule, Platform } from 'ionic-angular';
// import { NavController } from 'ionic-angular';
// import {  NavParams } from 'ionic-angular';
// import {StorageMock} from 'ionic-mocks';


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { Storage } from '@ionic/storage';


// import { RequestsPage } from './requests';
// import {
//   PlatformMock,
//   StatusBarMock,
//   SplashScreenMock,
//   NavMock,
//   NavParamsMock
// } from '../../../test-config/mocks-ionic';

// describe('MealsPage Component', () => {
//   let fixture;
//   let component;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [RequestsPage],
//       imports: [
//         IonicModule.forRoot(RequestsPage)
//       ],
//       providers: [
//         { provide: StatusBar, useClass: StatusBarMock },
//         { provide: SplashScreen, useClass: SplashScreenMock },
//         { provide: Platform, useClass: PlatformMock },
//         { provide: NavController, useClass: NavMock},
//         { provide: NavParams, useClass: NavParamsMock},
//         { provide: Storage, useClass: StorageMock}
//       ]
//     })
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RequestsPage);
//     component = fixture.componentInstance;
//   });

//   it('should be created', () => {
//       console.log(fixture)
//     expect(component instanceof RequestsPage).toBe(true);
//   });
 
// }); 