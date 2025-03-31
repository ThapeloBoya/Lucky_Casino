import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UtilityDataService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  // Get Lobby Redirect URL
  getLobbyRedirectUrl(mode: string): string {
    const gaid = this.getCookieById('gAID');
    const affid = this.getCookieById('affid');
    const trackingid = this.getCookieById('trackingID');
    return `http://downloads.luckycasinocasino.org/affiliate/remote/aiddownload2.asp?casinoID=763&gAID=${gaid}&subGid=0&bannerID=0&trackingID=${trackingid}&redirect=http%3A%2F%2Fdownloads.luckycasinocasino.org%2Fsmartdownloadcasino.asp%3Fredirect=https%253A%252F%252Fcdk.luckycasinocasino.org%252FLobby.aspx%252F%253FSkinId%253D3%2526show%253D${mode}`;
  }

  // Get Cookie by ID
  getCookieById(id: string): string {
    const nameEQ = `${id}=`;
    const ca = this.document.cookie.split(';');
    for (const c of ca) {
      let cookie = c.trim();
      if (cookie.startsWith(nameEQ)) {
        return cookie.substring(nameEQ.length);
      }
    }
    return '';
  }

  // Create a Cookie
  createCookie(id: string, value: string, days: number): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    this.document.cookie = `${id}=${value || ''}${expires}; path=/`;
  }

  // Create/Update Bounce Script URL
  createUpdateBounceScript(
    _token: string, _affID: string, _localIDClic: string, _payload: string, 
    _dest: string, _lastname: string, _email: string
  ): string {
    let { appUrl } = environment;
    let gAID = '';
    let affID = '';
    let payload = '';
    let dest = _dest || 'https://www.luckycasinocasino.org/en';
    let bannerid = '0';

    // Cookie management
    if (_token) {
      this.createCookie('token', _token, 3);
    }
    if (_affID) {
      gAID = _affID;
      this.createCookie('gAID', gAID, 3);
    }
    if (_localIDClic) {
      affID = _localIDClic;
      localStorage.setItem('affid', affID);
      this.createCookie('affid', affID, 3);
    }
    if (_payload) {
      payload = this.returnAsJSON(_payload);
      this.createCookie('trackingID', payload, 3);
    }

    // Constructing URL
    if (!_localIDClic) {
      const rtgdownloadurl = `http://downloads.luckycasino.io/affiliate/remote/aiddownload2.asp?casinoID=763&gAID=${gAID}&subGid=0&bannerID=0&trackingID=${payload}&redirect=http%3A%2F%2Fdownloads.luckycasino.io%2Fsmartdownloadcasino.asp%3Fredirect=${dest}`;
      return rtgdownloadurl;
    }

    dest += dest.includes('?') ? `&affid=${affID}&trackingID=${payload}` : `?affid=${affID}&trackingID=${payload}`;

    if (_lastname) {
      const lastname = _lastname.split(',')[0];
      dest += `&lastname=${lastname}`;
    }

    if (_email) {
      const email = _email.split(',')[0];
      dest += `&email=${email}`;
    }

    return dest;
  }

  // Convert payload to JSON
  returnAsJSON(val: string): string {
    if (val.includes('_MYAFF_')) {
      const [str0, str1] = val.split('_MYAFF_');
      const newVal = `{"token":"${str1 || ''}","payload":"${str0 || ''}"}`;
      return newVal;
    }
    return val;
  }

  // Return a list of known search engines
  returnBrowserSearchEngines(): string[] {
    return ['www.google', 'www.bing', 'duckduckgo', 'www.yahoo', 'www.msn', 'webcrawler'];
  }
}
