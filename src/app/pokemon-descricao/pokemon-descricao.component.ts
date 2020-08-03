import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemoesService } from '../pokemoes.service';

@Component({
  selector: 'app-pokemon-descricao',
  templateUrl: './pokemon-descricao.component.html',
  styleUrls: ['./pokemon-descricao.component.css']
})
export class PokemonDescricaoComponent implements OnInit {

  pokemon: any[] = [];

  constructor(
    private ParamsRouter: ActivatedRoute,
    private pokemonService: PokemoesService
    ){

    this.ParamsRouter.params.subscribe(params => {
      this.pokemon = this.pokemonService.getPokemon(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
