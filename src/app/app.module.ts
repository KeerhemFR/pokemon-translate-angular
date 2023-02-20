import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { FilterPipe } from './pipe/filter/filter.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent, FilterPipe],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
