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
import { Article }        from '../article';

@Component({
  selector: 'app-save-headline',
  templateUrl: './save-headline.component.html',
  styleUrls: ['./save-headline.component.css']
})
export class SaveHeadlineComponent implements OnInit {
public article: Article;
public category ="Category";
public categorys = [
        { id: 1, name: 'Sports' },
        { id: 2, name: 'Politic' },
        { id: 3, name: 'Entertainment' },
        { id: 4, name: 'Industry' },
        { id: 5, name: 'Finance' },
        { id: 6, name: 'Others' }
        ];
  setCategory(category:string){
    this.category = category;
    console.log(this.category);
  }      
  constructor(private router: Router, private springHeadlineService: SpringHeadlineService,private searchHeadlineApiService: SearchHeadlineApiService,private cdRef:ChangeDetectorRef ) { }

  ngOnInit() {

  	this.article=this.springHeadlineService.sendArticle();
    
                
  }
  
  saveArticle(comment: string): void{
    
    if(this.category=="Category"||comment==null){
    alert("Please select a category and/or  comment");}
    else{
    let link = ['/searchview'];
    this.router.navigate(link);
    this.springHeadlineService.postArticle(this.article,this.category,comment);
      
  }

    
  

} }

