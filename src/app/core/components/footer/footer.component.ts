import { Component } from '@angular/core';
import { SearchPokemonService } from '../../services/search-pokemon.service';
import { PageData } from '@constants/pages';
import { PageContent } from '@models/page';

@Component({
  selector: 'one-footer',
  template: `
    <footer mat-tab-nav-bar mat-align-tabs="center" backgroundColor="default">
      <a mat-tab-link *ngFor="let link of links" [routerLink]="link.route"
        routerLinkActive #linkActive="routerLinkActive"
        [active]="linkActive.isActive">
        <mat-icon>{{link.icon}}</mat-icon>
        <small>{{link.name}}</small>
      </a>
    </footer>
  `,
  styles: [`
    footer {
      bottom: 0;
      position: fixed;
      width: 100%;
    }
  `]
})
export class FooterComponent {
  links: PageContent[];

  constructor(private search: SearchPokemonService) {
    this.links = Object.values(PageData);
  }

  public openSearch(): void {
    this.search.openSearch();
  }

}
