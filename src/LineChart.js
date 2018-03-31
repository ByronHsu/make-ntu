import React, { Component } from 'react';
import {Chart, Axis, Tooltip, Geom} from "bizcharts";


const cols = {
   'value': { min: 0 },
   'year': {range: [ 0 , 1] }
};

const LineChart = ({data, width}) => (
   <Chart height={400} width={width} data={data} scale={cols}>
      <Axis name="year" />
      <Axis name="value" />
      <Tooltip crosshairs={{type : "y"}}/>
      <Geom type="line" position="year*value" size={3} />
      <Geom type='point' position="year*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
   </Chart>
)
export default LineChart;