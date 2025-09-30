import '@analogjs/vitest-angular/setup-snapshots';
import '@testing-library/jest-dom/vitest';

import '@angular/compiler';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@NgModule({
  providers: [provideZonelessChangeDetection()],
})
export class ZonelessTestModule {}

getTestBed().initTestEnvironment(
  [BrowserTestingModule, ZonelessTestModule],
  platformBrowserTesting()
);
