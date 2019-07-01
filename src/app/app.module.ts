import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatIconModule, MatInputModule,
  MatListModule, MatPaginatorModule, MatRippleModule,
  MatSidenavModule, MatTableModule,
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MainAreaComponent } from './main-area/main-area.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material';
import { DrawerItemComponent } from './drawer-item/drawer-item.component';
import { SearchComponent } from './search/search.component';
import {NgMatSearchBarModule} from 'ng-mat-search-bar';
import {MatSortModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    DrawerItemComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    NgMatSearchBarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'invoiceProvider/:invoiceProviderId', component: MainAreaComponent},
      {path: 'invoiceDetails/:invoiceSerialNumber', component: DetailsComponent}
    ]),
  ],
  providers: [],
  entryComponents: [DetailsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
