import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOMetaService {

  constructor(@Inject(DOCUMENT) private document: Document, private title: Title, private meta: Meta) { }

  // Update page title
  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  // Update meta tags
  updateMetaTags(metaTags: MetaDefinition[]): void {
    metaTags.forEach(m => this.meta.updateTag(m));
  }

  // Set canonical URL
  setCanonicalURL(url?: string): void {
    // Safely find and remove existing canonical link
    const oldLink = this.document.querySelector('link[rel=canonical]') as HTMLLinkElement | null;
    if (oldLink) {
      oldLink.remove();
    }

    // Set canonical URL, using the document URL if not provided
    const canURL = url ? url.replace('http://', 'https://') : this.document.URL.replace('http://', 'https://');
    
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canURL);

    // Append to document head
    this.document.head.appendChild(link);
  }
}
