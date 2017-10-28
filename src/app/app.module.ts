      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppModule as TimeModule, TimeComponent } from 'time';
import { WidgetComponent } from './widget/widget.component';
import { MissingWidgetComponent } from './components/missing-widget.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import { AppModule as WeatherModule, WeatherComponent } from 'weather';
import { WidgetFactory } from './providers/widget/widget.factory';
import { WidgetProvider } from './providers/widget/widget.provider';
import { UserPortalProvider } from './providers/user/user-portal.provider';
import { Widget } from './model/widget.model';
import { PortalComponent } from './portal/portal.component';
import { PortalFactory } from './providers/portal/portal.factory';
import { PortalProvider } from './providers/portal/portal.provider';
import { MissingPortalComponent } from './components/missing-portal.component';
import { Portal } from './model/portal.model';
import { DefaultPortalComponent } from './components/default-portal.component';
import { UserPortalComponent } from './user/user-portal.component';



var widgets: Widget[] = [
  {
    key: 'time',
    type: TimeComponent
  },
  {
    key: 'weather',
    type: WeatherComponent
  }
];


var portals: Portal[] = [
  {
    key: 'default',
    type: DefaultPortalComponent
  }
];

@NgModule({
  imports:      [ BrowserModule,TimeModule,WeatherModule ],
  declarations: [ 
    AppComponent, 
    WidgetComponent, 
    MissingWidgetComponent,
    WidgetContainerComponent,
    PortalComponent,
    DefaultPortalComponent,
    UserPortalComponent
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
    TimeComponent, 
    MissingWidgetComponent,
    WidgetComponent,
    WidgetContainerComponent,
    WeatherComponent,
    PortalComponent,
    DefaultPortalComponent,
    UserPortalComponent
  ],
  providers: [
    WidgetFactory, 
    {
      provide: WidgetProvider,
      useValue: WidgetProvider.register(widgets, 
        { 
          missingComponent: MissingWidgetComponent
        })
    },
    PortalFactory,
    {
      provide: PortalProvider,
      useValue: PortalProvider.register(portals, 
      {
        missingComponent: MissingPortalComponent
      })
    },
    UserPortalProvider
  ]
})
export class AppModule { }