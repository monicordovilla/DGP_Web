import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfilGestor',
  templateUrl: 'perfilGestor.page.html',
  styleUrls: ['perfilGestor.page.scss'],
})
export class perfilGestor implements OnInit {
  nombre = null;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(){
    this.nombre = this.activeRoute.snapshot.paramMap.get("username");
  }

}
