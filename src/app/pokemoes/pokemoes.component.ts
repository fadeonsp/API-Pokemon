import { Component, OnInit } from '@angular/core';
import { PokemoesService, PokemonFace } from '../pokemoes.service';

@Component({
  selector: 'app-pokemoes',
  templateUrl: './pokemoes.component.html',
  styleUrls: ['./pokemoes.component.css']
})
export class PokemoesComponent implements OnInit {

  pokemoes: PokemonFace[] = [];

  constructor(private pokemoesService: PokemoesService ) { }

  ngOnInit(): void {
    this.pokemoes = this.pokemoesService.getPokemoes();
  }

}
