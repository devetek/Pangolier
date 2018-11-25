import { app } from '@app/config';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { loadCss } from '@helpers/DOM';

/**
 * Global variables initialization, like define initial state, set initial global variables
 * adding new context to your hole apps, dont make any useless variables here
 * it will decrease our apps peformances, it will be impact to all apps context
 */
@Component({
  selector: 'profile-devetek',
  templateUrl: './container.html',
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string;
  description: string;
  url: string;

  constructor() {
    this.title = app.title;
    this.description = app.description;
    this.url = app.host;
  }

  ngOnInit() {
    /**
     * Your initial middleware
     * This initial using all context of the app, if you want to create sub lifecyle then,
     * create your own module and import here, inject to our app context, or
     * you can assign object into context
     */
  }

  ngAfterViewInit() {
    this.devOnLoaded();
  }

  devOnLoaded() {
    loadCss(app.externalStyle, { inject: 'endOfBody' });
  }
}
