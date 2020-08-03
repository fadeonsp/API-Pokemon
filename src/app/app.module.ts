import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PokemoesComponent } from './pokemoes/pokemoes.component';
import { PokemoesService } from './pokemoes.service';
import { PokemonDescricaoComponent } from './pokemon-descricao/pokemon-descricao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PokemoesComponent,
    PokemonDescricaoComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule
  ],
  providers: [PokemoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
