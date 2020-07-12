export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Indigo Island Reserve POA';
    config.map([
      {
        route: '/',
        name: 'home',
        moduleId: PLATFORM.moduleName('features/home/home'),
        nav: true,
        title: 'ABOUT'
      },
      {
        route: 'homeowner',
        name: 'homeowner',
        moduleId: PLATFORM.moduleName('features/homeowners/homeowner'),
        nav: true,
        settings: {dropdown: 'homeowner'},
        title: 'HOMEOWNERS'
      },
      {
        route: 'boardmembers',
        name: 'boardmembers',
        moduleId: PLATFORM.moduleName('features/homeowners/boardmembers'),
        nav: true,
        settings: {dropdown: 'homeowner'},
        title: 'BOARD MEMBERS'
      },
      {
        route: 'docs',
        name: 'docs',
        moduleId: PLATFORM.moduleName('features/homeowners/docs'),
        nav: true,
        settings: {dropdown: 'homeowner'},
        title: 'NEWS'
      },
      {
        route: 'arcform',
        name: 'arcform',
        moduleId: PLATFORM.moduleName('features/homeowners/arcform'),
        nav: true,
        settings: {dropdown: 'homeowner'},
        title: 'ARC FORM'
      },
      {
        route: 'news',
        name: 'news',
        moduleId: PLATFORM.moduleName('features/news/news'),
        nav: true,
        title: 'NEWS'
      },
      {
        route: 'contact',
        name: 'contact',
        moduleId: PLATFORM.moduleName('features/news/news'),
        nav: true,
        title: 'CONTACT'
      }
    ]);
  }
}
