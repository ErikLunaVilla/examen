import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from './character.service';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { SearchFilterComponent } from "./search-filter/search-filter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CharacterCardComponent, SearchFilterComponent]
})
export class AppComponent implements OnInit{
  characters: any[] = [];
  filteredCharacters: any[] = [];

  constructor(private characterService: CharacterService){

  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters =>{
      this.characters = characters;
      this.filteredCharacters = characters;
    })
  }

  onSearchTextChanged(searchText: string): void{
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
  }

  title = 'HarryPotter';
}
