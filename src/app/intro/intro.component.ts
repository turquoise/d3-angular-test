import { Component, ElementRef, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IntroComponent implements OnInit, AfterViewInit {

  constructor() { }

  // https://www.ibm.com/developerworks/library/wa-custom-vizualizations-angular-d3-trs/index.html

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.generateDataList();
  }

  generateDataList() {
    d3.select('.container')
    .append('svg')
    .selectAll('circle')
    .data([1000, 10000, 250000, 15000])
    .enter()
    .append('circle')
    .attr('r', d => Math.log(d))
    .attr('fill', '#5fc')
    .attr('stroke', '#333')
    .attr('transform', (d, i) => {
        var offset = i * 20 + 2 * Math.log(d);
        return `translate(${offset}, ${offset})`;
    });

  }



}
