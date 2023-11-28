import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { data } from '../data/data';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 33%;
    height: 400px;
`

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ city }) => {

    const arr = city[0].name !== 'Московской области' ? city : data; //Если выставлены фильтры то используем выбранные округа, если нет, используем все
    arr.sort((a, b) => b.population - a.population); // Сортируем по убыванию
    const diagramData = [];
    const maxValuesToShow = 11; //Максимальное количество округов, остальные в Другое
    if (arr.length > maxValuesToShow) {
        const valuesToShow = arr.slice(0, maxValuesToShow);
        const remainingValues = arr.slice(maxValuesToShow, arr.length);
        diagramData.push(...valuesToShow); 
        diagramData.push({ name: 'Другие', population: remainingValues.reduce((a, b) => a + b.population, 0) }) // Формируем Другое
    } else diagramData.push(...arr)  // Если округов меньше 10 


    const dataS = {
        labels: diagramData.map(el => el.name),
        datasets: [
            {
                label: 'Население',
                data: diagramData.map(el => el.population),
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    '#fff'
                ],
                borderWidth: 1,
            },
        ],
    };


    const options = {
        plugins: {
            legend: {
                display: true,
                position: "right",
                align: "center",
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            },
        }
    }

    return (
        <Wrapper>
            <Pie
                type="pie"
                data={dataS}
                options={options}
            />
        </Wrapper>

    );
};

export default PieChart;