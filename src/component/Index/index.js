import React from "react";
import styles from "../index.less";
import Table from "../common/Table";
import flux from "./flux";
import reqwest from "reqwest";
import 'antd/dist/antd.css';
import {Select} from "antd";
const Option = Select.Option;
import testTxtLoader from'./test.txt'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <span>手写一个针对txt文件的loader：{testTxtLoader}</span>
        <Demo/>

      </div>
    )
  }
}

import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Annotation,
} from "bizcharts";

// 业务实际使用的数据，如果你要使用此图表，需要：
// 1. 将此数据改为接口数据
// 2. 如果数据字段不同，需要修改下方全部同名的字段，比如 count -> xxxCount, 那么下面所有的 count 都要修改
var data = [
  {
    date: "2020-01-30",
    count: 35,
    alert: false,
  },
  {
    date: "2020-02-01",
    count: 30,
    alert: false,
  },
  {
    date: "2020-02-02",
    count: 20,
    alert: true,
  },
  {
    date: "2020-02-03",
    count: 28,
    alert: true,
  },
  {
    date: "2020-02-04",
    count: 30,
    alert: false,
  },
  {
    date: "2020-02-05",
    count: 20,
    alert: true,
  },
  {
    date: "2020-02-06",
    count: 23,
    alert: true,
  },
  {
    date: "2020-02-07",
    count: 34,
    alert: true,
  },
  {
    date: "2020-02-08",
    count: 26,
    pre_count: 26,
    alert: true,
  },
  {
    date: "2020-02-09",
    pre_count: 20,
    alert: true,
  },
  {
    date: "2020-02-10",
    pre_count: 24,
    alert: true,
  },
  {
    date: "2020-02-11",
    pre_count: 22,
    alert: true,
  },
  {
    date: "2020-02-12",
    pre_count: 32,
    alert: true,
  },
];

// 计算水位线占比
function getDivideRate(data, field, divideValue) {
  const values = data.reduce((pre, item) => {
    if (item[field]) {
      pre.push(item[field]);
    }
    return pre;
  }, []);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  return ((maxValue - divideValue) / (maxValue - minValue)).toFixed(4);
}

class Demo extends React.Component {
  render() {
    const alertLine = [...data].map((item) => {
      if (item.alert) {
        return item;
      }
      return {
        ...item,
        count: null,
      };
    });

    var scale = {
      date: {
        alias: "日期",
        type: "time",
      },
      count: {
        alias: "次数",
        // 由于使用不同View，需要设定 scale 的 min 和 max
        min: 10,
        max: 40,
      },
      pre_count: {
        alias: "次数",
        // 由于使用不同View，需要设定 scale 的 min 和 max
        min: 10,
        max: 40,
      },
    };

    const warningValue = 22;
    const colors = ["#FF8060", "#6BA8FF"];

    return (
      <Chart height={600} autoFit data={data} scale={scale}>
        <Tooltip showCrosshairs />
        <Axis name="count" />
        <Geom
          type="line"
          position="date*count"
          adjust= {'stack'}
          color={`blue`}
          style={{
            lineJoin: 'round'
          }}
          shape='smooth'
        />
        <Annotation.Line
          start={["min", warningValue]}
          end={["max", warningValue]}
          style={{
            lineDash: [2, 4],
            stroke: colors[0],
          }}
        />
        <Annotation.RegionFilter
          start={['min', 18]}
          end={['max', 22]}
          color="#FF0000"
        />
        <Annotation.RegionFilter
          start={['min', 30]}
          end={['max', 1000]}
          color="#00FF00"
        />
      </Chart>
    );
  }
}