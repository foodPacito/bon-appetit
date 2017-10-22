// import { async, TestBed } from '@angular/core/testing';
// import { IonicModule, Platform } from 'ionic-angular';
// import { NavController } from 'ionic-angular';


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from './home';
// import {
//   PlatformMock,
//   StatusBarMock,
//   SplashScreenMock,
//   NavMock
// } from '../../../test-config/mocks-ionic';

// describe('HomePage Component', () => {
//   let fixture;
//   let component;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [HomePage],
//       imports: [
//         IonicModule.forRoot(HomePage)
//       ],
//       providers: [
//         { provide: StatusBar, useClass: StatusBarMock },
//         { provide: SplashScreen, useClass: SplashScreenMock },
//         { provide: Platform, useClass: PlatformMock },
//         { provide: NavController, useClass: NavMock }
//       ]
//     })
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//   });

//   it('should be created', () => {
//     expect(component instanceof HomePage).toBe(true);
//   });
//   it('should navigate to the requests page', () => {
//     expect(typeof component.reqPage).toBe('function')
//   });
//   it("should have a fake variable", () => {
//     component.fake = 'Hi'
//     expect(component.fake).toBe('Hi')
//   })
// });