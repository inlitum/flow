import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }            from './app.component';
import { FlowComponent }           from './components/flow/flow.component';
import { FlowNodeComponent }       from './components/flow-node/flow-node.component';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FlowComponent,
    FlowNodeComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(iconRegistry: MatIconRegistry) {
        iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    }
}
