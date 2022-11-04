import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }                   from './app.component';
import { FlowComponent }                  from './components/flow/flow.component';
import { FlowNodeComponent }              from './components/flow-node/flow-node.component';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { NodeExitComponent }              from './components/node-exit/node-exit.component';
import { FirstLetterOnlyPipe }            from './pipes/first-letter-only.pipe';
import { SidebarComponent }               from './components/sidebar/sidebar.component';
import { MatTabsModule }                  from '@angular/material/tabs';

@NgModule ({
    declarations: [
        AppComponent,
        FlowComponent,
        FlowNodeComponent,
        NodeExitComponent,
        FirstLetterOnlyPipe,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor (iconRegistry: MatIconRegistry) {
        iconRegistry.setDefaultFontSetClass ('material-icons');
    }
}
