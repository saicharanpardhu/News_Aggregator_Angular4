import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router }            from '@angular/router';
import {  ChangeDetectorRef } from '@angular/core';
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

//import { GetHeadlineService }          from '../get-headline.service';
import { SpringHeadlineService }          from '../spring-headline.service';
import { SearchHeadlineApiService }          from '../search-headline-api.service';
import { Provider }        from '../provider';
import { SavedArticle }        from '../savedarticle';
@Component({
  selector: 'app-saved-headlines',
  templateUrl: './saved-headlines.component.html',
  styleUrls: ['./saved-headlines.component.css']
})
export class SavedHeadlinesComponent implements OnInit {
public savedarticles1 : Observable<SavedArticle[]>;
public savedarticles : SavedArticle[];
public category ="Category";
public categorys = [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'Politic' },
        { id: 3, name: 'Entertainment' },
        { id: 4, name: 'Industry' },
        { id: 5, name: 'Finance' },
        { id: 6, name: 'Others' }
        ];

/*setCategory(category:string){
    this.category = category;
    console.log(this.category);
    this.oncategoryselect;
  }  */ 

  constructor(private router: Router, private springHeadlineService: SpringHeadlineService,private searchHeadlineApiService: SearchHeadlineApiService,private cdRef:ChangeDetectorRef ) { }

  ngOnInit() {
   
  }
  
    setCategory(category:string):void{
   console.log("logger");
   this.category = category;
    console.log(this.category);
    this.springHeadlineService.getSavedArticles(this.category).subscribe(
        savedarticles =>{
            this.savedarticles = savedarticles;
            console.log(this.savedarticles);
            console.log("logger");
            
        },
        error => alert("error"));

  }

  deleteArticle(id :string,category :string):void{

   this.springHeadlineService.deleteArticle(id,category);
   let link = ['/savedheadlines'];
    this.router.navigate(link);
    this.setCategory("Category");
    alert("article deleted");
  }
}
