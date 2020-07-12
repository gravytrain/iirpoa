import { Router, RouterConfiguration } from 'aurelia-router';

export class Homeowner {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'HOMEOWNER';
    config.map([
      {
        route: 'boardmembers',
        name: 'boardmembers',
        moduleId: PLATFORM.moduleName('features/homeowners/boardmembers'),
        nav: true,
        title: 'BOARDMEMBERS'
      },
      {
        route: 'docs',
        name: 'docs',
        moduleId: PLATFORM.moduleName('features/homeowners/docs'),
        nav: true,
        title: 'GOVERNING DOCS'
      },
      {
        route: 'arcform',
        name: 'arcform',
        moduleId: PLATFORM.moduleName('features/homeowners/arcform'),
        nav: true,
        title: 'ARC FORM'
      }
    ]);
  }
}
