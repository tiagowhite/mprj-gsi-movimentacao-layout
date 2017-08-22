import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  mode = 'determinate';

  movimentos = [
    {
      type: 'Liçencas',
      subType: 'Antecipação de fruição',
      createdAt: new Date('08/10/2017'),
      updatedAt: new Date('08/15/2017'),
      progress: 67.40,
      progressColor: 'primary',
      icon: 'send'
    },
    {
      type: 'Liçencas',
      subType: 'Licenças paternidade casamento e luto',
      createdAt: new Date('08/01/2017'),
      updatedAt: new Date('08/05/2017'),
      progress: 70.10,
      progressColor: 'accent',
      icon: 'inbox'
    },
    {
      type: 'Férias',
      subType: 'Renúncia',
      createdAt: new Date('07/01/2017'),
      updatedAt: new Date('07/05/2017'),
      progress: 100,
      progressColor: 'warm',
      icon: 'check circle'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}

