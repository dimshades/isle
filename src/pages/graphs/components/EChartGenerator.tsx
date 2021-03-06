// manually load ECharts file shrink bundle size
import ReactEchartsCore from 'echarts-for-react/lib/core';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/singleAxis';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/tooltip';
import echarts from 'echarts/lib/echarts';
import React from 'react';

interface Props {
    data: AxisData;
}

const EChartGenerator = (props: Props) => {
    return <ReactEchartsCore className='chart-item' echarts={echarts} option={chartDataGenerator(props.data)} />;
};

export default EChartGenerator;

export interface AxisData {
    name: string;
    xValue: string[];
    yValue: number[];
}

const chartDataGenerator = (data: AxisData) => {
    const { name, xValue, yValue } = data;
    return {
        tooltip: {
            trigger: 'axis',
            position: function (pt: any) {
                return [pt[0], '10%'];
            },
        },
        title: {
            left: 'left',
            text: `${name}`,
            textStyle: {
                color: 'white',
            },
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none',
                },
                restore: {},
                saveAsImage: {},
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xValue,
            axisLabel: { color: 'white' },
        },
        yAxis: {
            scale: true,
            type: 'value',
            boundaryGap: [0, '100%'],
            axisLabel: { color: 'white' },
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 10,
            },
            {
                start: 0,
                end: 10,
                handleIcon:
                    'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                },
            },
        ],
        series: [
            {
                name: 'total',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: '#FD658580',
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#FD6585',
                        },

                        {
                            offset: 1,
                            color: '#0D25B9',
                        },
                    ]),
                },
                data: yValue,
            },
        ],
    };
};
