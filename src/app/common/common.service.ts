import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  websitePriceDom: any = null;

  constructor() { }

  /**
   * Get price number from html
   * @param websiteHtml websiteHtml
   * @param websitePriceClass websitePriceClass
   */
  public getPriceFromHtml(websiteHtml: string, websitePriceClass: string): string {
    if (websitePriceClass === '' || websiteHtml === '') {
      return '0';
    }
    const priceText: string = $(websiteHtml).find(websitePriceClass).text();
    const priceNumber: string = this.convertPriceToNumber(priceText);
    return priceNumber;
  }

  /**
   * Convert website price to number
   * @param priceString priceString
   */
  public convertPriceToNumber(priceString: string): string {
    if (!priceString) {
      return;
    }
    return String(priceString).match(/\d/g).join('');
  }

  /**
   * Format price to vnd
   */
  public formatPrice(price: number) {
    return Number(price).toLocaleString() + ' đ';
  }

  /**
   * Get domain of website
   * @param websiteUrl websiteUrl
   */
  public getWebsiteDomain(websiteUrl): string {
    return String(websiteUrl).split('/')[2];
  }
}
