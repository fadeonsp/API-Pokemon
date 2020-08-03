import { Injectable } from '@angular/core';

export interface PokemonFace {

  id: number;
  nome: string;
  imagem: string;
  fraqueza: string;
  habilidades: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemoesService {

  pokemoes: PokemonFace[] = [
    {
      id: 0,
      nome: 'Squirtle',
      imagem: 'pok1.png',
      fraqueza: 'relva, eletricidade',
      habilidades: 'Quando retrai o pescoço comprido para dentro da concha, esguicha a água com força vigorosa.'
    },
    {
      id: 1,
      nome: 'Charmeleon',
      imagem: 'pok2.png',
      fraqueza: 'água, terra, pedra',
      habilidades: 'Tem uma natureza bárbara. Na batalha, ele gira sua cauda de fogo e corta com garras afiadas.'
    },
    {
      id: 2,
      nome: 'Charmander',
      imagem: 'pok3.png',
      fraqueza: 'água, terra, pedra',
      habilidades: 'Tem uma preferência por coisas quentes. Quando chove, é dito que o vapor jorra da ponta da cauda.'
    },
    {
      id: 3,
      nome: 'Charizard',
      imagem: 'pok4.png',
      fraqueza: 'água, eletricidade, pedra',
      habilidades: 'Cospe fogo quente o suficiente para derreter pedras. Pode causar incêndios florestais soprando chamas.'
    },
    {
      id: 4,
      nome: 'Wartortle',
      imagem: 'pok5.png',
      fraqueza: 'relva, eletricidade',
      habilidades: 'É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo.'
    },
    {
      id: 5,
      nome: 'Blastoise',
      imagem: 'pok6.png',
      fraqueza: 'relva, eletricidade',
      habilidades: 'Esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retira dentro de sua concha.',
    },
    {
      id: 6,
      nome: 'Metapod',
      imagem: 'pok7.png',
      fraqueza: 'fogo, vôo, pedra',
      habilidades: 'Está esperando o momento para evoluir. Nesse estágio, ele só pode endurecer, permanecendo imóvel para evitar ataques.',
    },
    {
      id: 7,
      nome: 'Caterpie',
      imagem: 'pok8.png',
      fraqueza: 'fogo, vôo, pedra',
      habilidades: 'Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.',
    }

  ];

  getPokemoes(){
    return this.pokemoes;
  }

  getPokemon(id: number) {
    let pokeArray = [];

    for (let pokemon of this.pokemoes) {
      if (pokemon.id == id) {
        pokeArray.push(pokemon);
      }
    }
    return pokeArray;

  }

  constructor() { }
}
