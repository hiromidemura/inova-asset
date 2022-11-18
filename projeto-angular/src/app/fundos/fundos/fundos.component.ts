import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Fundos } from '../models/fundos';
import { FundosService } from '../services/fundos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Perfil } from '../models/perfil';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.css']
})

export class FundosComponent {

  fundos: Observable<Fundos[]>;
  displayedColumns = ['codigo', 'name', 'cnpj', 'abertura', 'encerramento', 'risco'];

  selectedValue!: string;

  perfil: Perfil[] = [
    {value: '1', viewValue: 'Conservador'},
    {value: '2', viewValue: 'Moderado'},
    {value: '3', viewValue: 'Arrojado'},
  ];

  constructor(private fundosService: FundosService,
    private service: FundosService
  ) {

    this.fundos = this.fundosService.list()
      .pipe(
        catchError(error => {
          return of([])
        }
        )
      );
  }

  onChange() {
    console.log(this.selectedValue);
    this.fundos = this.service.listarFundos(this.selectedValue);
  };

}
