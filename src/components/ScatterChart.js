import React from 'react';
import { data } from '../data/data';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 33%;
    height: 400px;
    display: flex;
    align-items: center;
`

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const options = {
    plugins: {
        legend: {
            display: true,
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
            }
        },
        tooltip: {
            callbacks: {
                label: function (ctx) {
                    let label = ctx.dataset.labels[ctx.dataIndex];
                    label += " (" + ctx.parsed.x + ", " + ctx.parsed.y + ")";
                    return label;
                }
            }
        }
    }
}

const ScatterChart = ({ city }) => {

    const arr = city[0].name !== 'Московской области' ? city : data;  //Если выставлены фильтры то используем выбранные округа, если нет, используем все

    const chartData = {
        datasets: [
            {
                labels: arr.map(el => el.name),
                label: 'Прирост vs Население',
                data: arr.map(el => ({ y: el.gain, x: el.population })),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    };

    return (
        <Wrapper>
            <Scatter options={options} data={chartData} />
        </Wrapper>
    )
};

export default ScatterChart;