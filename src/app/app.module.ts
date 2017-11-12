      
import { NgModule, Type, ModuleWithProviders, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Injectable, Component, ViewChild, Directive, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
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
import { PortalTemplateComponent } from './portal-template.component';
import { SampleWidgetComponent } from './sample-widget.component';
export const WidgetToken = new InjectionToken<Widget>("widgetToken");
export const PortalToken = new InjectionToken<Portal>("portalToken");



export function portalFactory(portals: Portal[]) {
    alert(portals.length);
  return new PortalProvider(portals);
}

export function widgetFactory(widgets: Widget[]) {
    alert(widgets.length);
  return new WidgetProvider(widgets);
}


@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    WidgetComponent, 
    PortalComponent, 
    WidgetHostDirective, 
    WidgetContainerComponent
  ],
  exports: [
    WidgetComponent, 
    PortalComponent, 
    WidgetHostDirective, 
    WidgetContainerComponent
  ]
})
export class PortalCoreModule { 
  static forRoot(config:PortalConfig): ModuleWithProviders{
    return {
      ngModule: PortalCoreModule,
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
    PortalCoreModule.forRoot({
      portals: [
          { name: 'sample-portal', component: PortalTemplateComponent }
      ],
      widgets: [
          { name: 'sample-widget', component: SampleWidgetComponent }
      ]
    })
  ],
  declarations: [ 
    AppComponent,
    PortalTemplateComponent,
    SampleWidgetComponent

  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
      PortalTemplateComponent,
      SampleWidgetComponent
  ]
})
export class AppModule { }