import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';  
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Import components
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { AboutComponent } from './pages/about/about.component';
import { JackpotComponent } from './pages/jackpot/jackpot.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { VipComponent } from './pages/vip/vip.component';
import { AndroidCasinosComponent } from './pages/android-casinos/android-casinos.component';
import { AntiMoneyLaunderingPolicyComponent } from './pages/anti-money-laundering-policy/anti-money-laundering-policy.component';
import { BaccaratVariationsComponent } from './pages/baccarat-variations/baccarat-variations.component';
import { BankingComponent } from './pages/banking/banking.component';
import { BigWinCasinoComponent } from './pages/big-win-casino/big-win-casino.component';
import { BitcoinComponent } from './pages/bitcoin/bitcoin.component';
import { BlackberryCasinoComponent } from './pages/blackberry-casino/blackberry-casino.component';
import { BlackjackRulesComponent } from './pages/blackjack-rules/blackjack-rules.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'support', loadComponent: () => import('./pages/support/support.component').then(m => m.SupportComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'jackpot', loadComponent: () => import('./pages/jackpot/jackpot.component').then(m => m.JackpotComponent) },
  { path: 'calendar', loadComponent: () => import('./pages/calendar/calendar.component').then(m => m.CalendarComponent) },
  { path: 'promotions', loadComponent: () => import('./pages/promotions/promotions.component').then(m => m.PromotionsComponent) },
  { path: 'vip', loadComponent: () => import('./pages/vip/vip.component').then(m => m.VipComponent) },
  { path: 'android-casinos', loadComponent: () => import('./pages/android-casinos/android-casinos.component').then(m => m.AndroidCasinosComponent) },
  { path: 'anti-money-laundering-policy', loadComponent: () => import('./pages/anti-money-laundering-policy/anti-money-laundering-policy.component').then(m => m.AntiMoneyLaunderingPolicyComponent) },
  { path: 'baccarat-variations', loadComponent: () => import('./pages/baccarat-variations/baccarat-variations.component').then(m => m.BaccaratVariationsComponent) },
  { path: 'banking', loadComponent: () => import('./pages/banking/banking.component').then(m => m.BankingComponent) },
  { path: 'big-win-casino', loadComponent: () => import('./pages/big-win-casino/big-win-casino.component').then(m => m.BigWinCasinoComponent) },
  { path: 'bitcoin', loadComponent: () => import('./pages/bitcoin/bitcoin.component').then(m => m.BitcoinComponent) },
  {path : 'blackberry-casino', loadComponent: () => import('./pages/blackberry-casino/blackberry-casino.component').then(m => m.BlackberryCasinoComponent) },
  {path : 'blackjack-rules', loadComponent: () => import('./pages/blackjack-rules/blackjack-rules.component').then(m => m.BlackjackRulesComponent) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

// Application config for routing
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};
