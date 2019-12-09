import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividad',
  templateUrl: 'actividad.page.html',
  styleUrls: ['actividad.page.scss'],
})
export class actividad {
  id = null;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.activeRoute.snapshot.paramMap.get("id");
  }

}
