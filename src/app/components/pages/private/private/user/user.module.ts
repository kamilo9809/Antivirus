import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { CarouselComponent } from './news/newsComponents/carousel/carousel.component';
import { OpportunityCardComponent } from './news/newsComponents/opportunity-card/opportunity-card.component';
import { OpportunityCardsComponent } from './news/newsComponents/opportunity-cards/opportunity-cards.component';
import { SearchComponent } from './news/newsComponents/search/search.component';
import { TranslocoRootModule } from 'src/app/transloco-root.module';



@NgModule({
  declarations: [
    NewsComponent,
    CarouselComponent,
    OpportunityCardComponent,
    OpportunityCardsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    TranslocoRootModule
  ],
  exports: [
    NewsComponent
  ]
})
export class UserModule { }
