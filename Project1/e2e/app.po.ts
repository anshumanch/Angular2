import { browser, element, by } from 'protractor';

export class Project1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getTableText() {
    return element(by.css('table')).getText();
  }
}
