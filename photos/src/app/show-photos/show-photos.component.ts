import { Component } from '@angular/core';
import { FetchPhotosService } from '../fetch-photos.service'; 

@Component({
  selector: 'app-show-photos',
  templateUrl: './show-photos.component.html',
  styleUrls: ['./show-photos.component.css']
})
export class ShowPhotosComponent {
  photoUrl: string = '';


  constructor(private photosService: FetchPhotosService) {
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }
  
  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl= response.urls.regular;
    })
  }

}
