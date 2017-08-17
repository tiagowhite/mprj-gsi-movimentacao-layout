import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  movimentos = [
    {
      type: 'Liçencas',
      subType: 'Antecipação de fruição',
      createdAt: new Date('08/10/2017'),
      updatedAt: new Date('08/15/2017'),
      progress: 40
    },
    {
      type: 'Liçencas',
      subType: 'Licenças paternidade casamento e luto',
      createdAt: new Date('08/01/2017'),
      updatedAt: new Date('08/05/2017'),
      progress: 80
    },
    {
      type: 'Férias',
      subType: 'Renúncia',
      createdAt: new Date('07/01/2017'),
      updatedAt: new Date('07/05/2017'),
      progress: 100
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}

