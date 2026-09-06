import { NavigationTab } from '../types';
import { SEO_METADATA } from '../data/seoMetadata';
import { BUSINESS_INFO } from '../data/content';

/**
 * Updates or creates a <meta> element with the specified attribute and content
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  if (typeof document === 'undefined') return;

  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Updates or creates a <link rel="canonical"> element
 */
function setCanonical(url: string): void {
  if (typeof document === 'undefined') return;

  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Injects or updates JSON-LD structured schema script in <head>
 */
function setStructuredData(jsonObj: Record<string, any>): void {
  if (typeof document === 'undefined') return;

  const scriptId = 'scmw-seo-schema';
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('id', scriptId);
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonObj);
}

/**
 * Synchronizes HTML document title, meta tags, OpenGraph, Twitter cards,
 * canonical link, and JSON-LD schema for the current navigation tab.
 */
export function applyTabSeo(tab: NavigationTab): void {
  if (typeof document === 'undefined') return;

  const config = SEO_METADATA[tab] || SEO_METADATA.home;
  const baseUrl = `https://${BUSINESS_INFO.domain}`;
  const fullUrl = `${baseUrl}${config.canonicalPath}`;

  // 1. Primary Title
  document.title = config.title;

  // 2. Standard Search Meta Tags
  setMetaTag('name', 'description', config.description);
  setMetaTag('name', 'keywords', config.keywords);
  setMetaTag('name', 'author', BUSINESS_INFO.founder);

  // 3. OpenGraph Tags (Facebook, LinkedIn, Slack, iMessage)
  setMetaTag('property', 'og:title', config.ogTitle);
  setMetaTag('property', 'og:description', config.ogDescription);
  setMetaTag('property', 'og:url', fullUrl);
  setMetaTag('property', 'og:type', config.ogType);
  setMetaTag('property', 'og:site_name', BUSINESS_INFO.tradingName);
  setMetaTag('property', 'og:locale', 'en_AU');

  // 4. Twitter / X Card Meta Tags
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', config.ogTitle);
  setMetaTag('name', 'twitter:description', config.ogDescription);
  setMetaTag('name', 'twitter:url', fullUrl);

  // 5. Canonical Link
  setCanonical(fullUrl);

  // 6. JSON-LD Structured Schema
  if (config.jsonLd) {
    setStructuredData(config.jsonLd);
  }
}
