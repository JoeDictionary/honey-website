import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-presents',
  templateUrl: './presents.component.html',
  styleUrls: ['./presents.component.scss'],
})
export class PresentsComponent implements OnInit {
  tabs = [
    { title: 'Ernste Geschenke', link: 'ernste-geschenke' },
    { title: 'Geschenke zum Spaß', link: 'geschenke-zum-spass' },
  ];
  activeLink = this.tabs[0].title;

  constructor(private router: Router, public route: ActivatedRoute) {}

  showPresents(tab: any) {
    console.log(this.router);
    this.activeLink = tab.title;
    this.router.navigate([tab.link], { relativeTo: this.route });
  }

  ngOnInit(): void {}
}
