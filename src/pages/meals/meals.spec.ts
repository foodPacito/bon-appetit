import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {  NavParams } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MealsPage } from './meals';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  NavMock
} from '../../../test-config/mocks-ionic';

describe('MealsPage Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MealsPage],
      imports: [
        IonicModule.forRoot(MealsPage)
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: NavController, useClass: NavMock},
        { provide: NavParams, useClass: NavMock}
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsPage);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MealsPage).toBe(true);
  });
 
});