import { Component, ElementRef, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3scale from 'd3-scale';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShapesComponent implements OnInit, AfterViewInit {

  constructor(private element: ElementRef) {}

  // http://javaee.ch/2017/02/10/angular-and-d3-js-tutorial/

  ngOnInit() {
    //this.generateShapes();
  }

  ngAfterViewInit() {
    let data = [10, 20 ,30 ,15, 4, 26, 33];
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .style("width", function(d) { return d*10 + "px"; })
        .text(function(d) { return d; });
  }

  generateShapes() {

      // let svg = d3.select(this.element.nativeElement).append('svg')
      //   .attr("width", 600)
      //   .attr("height",  200)
      //   .style('background-color', 'blue');



  }

}
