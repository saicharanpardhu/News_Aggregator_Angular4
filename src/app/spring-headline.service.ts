import { Injectable } from '@angular/core';
import { Http , Response, RequestOptions, Headers }       from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Subject }    from 'rxjs/Subject';
import { Provider }        from './provider';
import { Article }        from './article';
import { SaveArticle }        from './saveArticle';
import { SavedArticle }        from './savedarticle';
@Injectable()
export class SpringHeadlineService {
handleError: any;
private article :any;
private article2 :Article;
public savedarticles : SavedArticle[];
 //article$= this.article.asObservable();

pushArticle(data: Article) {
    this.article=data;
    this.article2=data;
  }
sendArticle():Article {
    return this.article;
  }  

   postUrl = 'http://localhost:8080/news/pardhu/articles/';
  
  

  constructor(private http: Http) { }

postArticle(article:Article,category:string,comment:string): void {
	
    let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
    let options = new RequestOptions({ headers: headers }); 
    let saveArticle =  this.articletosavearticle (article,category,comment); 
    console.log(JSON.stringify(saveArticle));
    console.log(this.postUrl+category);
	   this.http.post(this.postUrl+category,JSON.stringify(saveArticle),{ headers: headers }).subscribe(
    (data) => console.log(data),
    (err) => alert(err));
    
}

articletosavearticle(article:Article,category:string,comment:string):SaveArticle{
let saveArticle = new SaveArticle;
saveArticle.userId= "pardhu";
saveArticle.articleAuthor= article.author;
saveArticle.articleCategory = category;
saveArticle.articleComment = comment;
saveArticle.articleDescription = article.description;
saveArticle.articleHeadline = article.title;
saveArticle.articleImageURL =article.urlToImage;
saveArticle.articleTime = article.publishedAt;
saveArticle.articleURL = article.url;
return saveArticle;
}

getSavedArticles(category:string): Observable<SavedArticle[]> {


console.log(this.postUrl+category);
let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8'});
return this.http.get(this.postUrl+category).map(res => <SavedArticle[]> res.json());
}

deleteArticle(id:string,category :string):void {

this.http.delete(this.postUrl+category+"?id="+id).subscribe(
    (data) => console.log(data),
    (err) => alert(err));
console.log(this.postUrl+category+"?id="+id);


}

}
