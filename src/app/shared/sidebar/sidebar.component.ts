import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {


  get historial () {
    
    return this.gifsService.historial;

  }


  constructor( private gifsService: GifsService  ) { 
    
  }

  buscar( termino: string){
    console.log(termino)

    if ( termino.trim().length === 0){
      return;
    }

    this.gifsService.buscarGifs( termino );
    
  
  }
  
}
