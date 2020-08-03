import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemoesComponent } from './pokemoes/pokemoes.component';
import { PokemonDescricaoComponent } from './pokemon-descricao/pokemon-descricao.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'pokemoes', component: PokemoesComponent},
  { path: 'pokemon/:id', component: PokemonDescricaoComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
