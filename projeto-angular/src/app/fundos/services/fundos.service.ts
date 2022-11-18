import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, of, tap } from 'rxjs';
import { Fundos } from '../models/fundos';

@Injectable({
  providedIn: 'root'
})
export class FundosService {

  private readonly API = 'api/fundos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Fundos[]>(this.API)
      .pipe(
        first(),
        tap(fundos => console.log(fundos))
      );
  }

  listarFundos(perfil: string) {
    //    this.httpClient.post<number>(this.API, perfil)
    //      .subscribe(result => console.log(result),
    //      error => console.log(error));
    console.log(this.API + '/' + perfil);
    return this.httpClient.get<Fundos[]>(this.API + '/' + perfil).pipe(first(),tap(fundos => console.log(fundos)));
  }

}
