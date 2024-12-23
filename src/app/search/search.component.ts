import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Extract the searchTerm from the route parameters
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.router.navigateByUrl(`/search/${this.searchTerm}`);
    }
  }
}
