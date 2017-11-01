      
import { NgModule, Type, ModuleWithProviders, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Injectable, Component, ViewChild, Directive, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import {  Portal1Component } from '../portals/portal1.component';
import { Widget1Component } from '../widgets/widget1.component';
import { WidgetComponent } from './widget/widget.component';
import { PortalConfig, Portals, Widgets, Portal, Widget } from './model/model';
import { WidgetHostDirective } from './widget-host/widget-host.directive';
import { PortalComponent } from './portal/portal.component';
import { PortalProvider } from './providers/portal.provider';
import { WidgetProvider } from './providers/widget.provider';
import { WidgetFactory } from './providers/widget.factory';
import { PortalFactory } from './providers/portal.factory';
import { WidgetContainerComponent } from './widget/widget-container.component';
import { MessageService } from './widget/message.service';
import { Widget2Component } from '../widgets/widget2.component';
import { Portal2Component } from '../portals/portal2.component';
export const WidgetToken = new InjectionToken<Widget>("widgetToken");
export const PortalToken = new InjectionToken<Portal>("portalToken");
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppModule as ChartModule, ChartComponent} from 'chart';

export function portalFactory(portals: Portal[]) {
  return new PortalProvider(portals);
}

export function widgetFactory(widgets: Widget[]) {
  return new WidgetProvider(widgets);
}

@NgModule({
  imports:      [BrowserModule],
  declarations: [WidgetComponent, PortalComponent, WidgetHostDirective, WidgetContainerComponent],
  exports: [WidgetComponent, PortalComponent, WidgetHostDirective, WidgetContainerComponent]
})
export class PortalModule { 
  static forRoot(config:PortalConfig): ModuleWithProviders{
    return {
      ngModule: PortalModule,
      providers: [
        {
          provide: WidgetToken,
          useValue: config.widgets
        },
        {
          provide: PortalToken,
          useValue: config.portals
        },
        {
          provide: PortalProvider,
          useFactory: portalFactory,
          deps: [PortalToken]

        },
        {
          provide: WidgetProvider,
          useFactory: widgetFactory,
          deps: [WidgetToken]
        },
        WidgetFactory,
        PortalFactory,
        MessageService
        
      ]
    }
  }
}


@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule, 
    ChartModule,
    PortalModule.forRoot({
      portals: [
        { name: 'portal1', component: Portal1Component },          
        { name: 'portal2', component: Portal2Component },          
      ],
      widgets: [
        { name: 'widget1', component: Widget1Component },          
        { name: 'widget2', component: Widget2Component },          
        { name: 'chart', component: ChartComponent },          
      ]
    })
  ],
  declarations: [ 
    AppComponent, 
    Portal1Component,
    Widget1Component,
    Widget2Component,
    Portal2Component,
    
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
    Portal1Component,
    Widget1Component,
    Widget2Component,
    Portal2Component,
    ChartComponent
  ]
})
export class AppModule { }