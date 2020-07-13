import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './DefaultPage/default/default.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {DemoMaterialModule} from './material-module';

import { InputErrorStateMatcherExampleComponent } from './MatCollections/Input/input-error-state-matcher-example/input-error-state-matcher-example.component';
import { SliderOverviewExampleComponent } from './MatCollections/Slider/slider-overview-example/slider-overview-example.component';
import { WilliamDingCVComponent } from './CV/william-ding-cv/william-ding-cv.component';
import { AvatarComponent } from './CV/2-avatar/avatar.component';
import { ToolbarComponent } from './CV/1-toolbar/toolbar.component';
import { ExperienceComponent } from './CV/3-detail-experience/experience.component';
import { EductionComponent } from './CV/3-detail-eduction/eduction.component';
import { TechnicalSkillsComponent } from './CV/3-detail-technical-skills/technical-skills.component';
import { SelfIntroductionComponent } from './CV/3-detail-self-introduction/self-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    InputErrorStateMatcherExampleComponent,
    SliderOverviewExampleComponent,
    WilliamDingCVComponent,
    AvatarComponent,
    ToolbarComponent,
    ExperienceComponent,
    EductionComponent,
    TechnicalSkillsComponent,
    SelfIntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
