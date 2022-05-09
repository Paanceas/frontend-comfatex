import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  salesData: ChartData<'line'> = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
    datasets: [
      { label: 'Fajas 1', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
      { label: 'Fajas 2', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'Fajas 3', data: [500, 400, 350, 450, 650], tension: 0.5 },
      { label: 'Fajas 4', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ventas por mes',
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

  sizeView(event:any){
    const template = document.querySelector(".sidebar");
    const body = document.querySelector(".body");
    if(event){
      template?.classList.add("expander");
      body?.classList.add("body-expander");
    }else{
      template?.classList.remove("expander");
      body?.classList.remove("body-expander");
    }
  }

}
