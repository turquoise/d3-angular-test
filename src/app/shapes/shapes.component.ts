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
    this.generateShapes();
    this.generateData();
    this.generateBarData();
  }

  generateBarData() {
    var bardata = [20, 30, 105, 15, 85];
    var height = 400,
        width = 600,
        barWidth = 50,
        barOffset = 5;

    d3.select('#barchart').append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('background', '#C9D7D6')
        .selectAll('rect').data(bardata)
        .enter().append('rect')
            .style('fill', '#C61C6F')
            .attr('width', barWidth)
            .attr('height', function(d) {
                return d;
            })
            .attr('x', function(d,i) {
                return i * (barWidth + barOffset);
            })
            .attr('y', function(d) {
                return height - d;
            })
  }

  generateData() {
    let data = [10, 20 ,30 ,15, 4, 26, 33];
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .style("width", function(d) {
          return d*10 + "px";
        })
        .text(function(d) {
          return d;
        });
  }

  generateShapes() {

    d3.select('#chart')
    .append('svg')
      .attr('width', 600)
      .attr('height', 400)
      .style('background', "#93A1A1")
    .append("rect")
      .attr('x', 200)
      .attr('y', 100)
      .attr('height', 200)
      .attr('width', 200)
      .style('fill', '#CB4B19')
    d3.select('svg')
      .append('circle')
      .attr('cx','300')
      .attr('cy','200')
      .attr('r','50')
      .style('fill', '#840043')

  }

}
