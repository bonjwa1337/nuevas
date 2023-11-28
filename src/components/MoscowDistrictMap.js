import { data } from '../data/data';
import { regions } from '../data/regions';
import rgbHex from 'rgb-hex';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 33%;
  height: 100%; 
`

const MoscowDistrictMap = ({city}) => {

    const arr = city[0].name !== 'Московской области' ? city : data; //Если выставлены фильтры то используем выбранные округа, если нет, используем все
    const maxPopulation = arr.reduce((acc, obj) => { // Узнаем значение максимума населения
        return Math.max(acc, obj.population);
    }, 0);

    function generateBlueGradient(population, maxPopulation) { // Изменяем значение красного и зеленого в засимости от процентного соотношения с макс. населением 
        const percentage = (population / maxPopulation) * 100;
        const red = 255 - (255 * (Math.floor(percentage) / 100));
        const green = 255 - (255 * (Math.floor(percentage) / 100));
        const blue = 255;
        const color = `rgb(${red}, ${green}, ${blue})`;
        const hex = rgbHex(color);
        return '#' +hex;
    }


    return (
        <Wrapper>
            <svg height="400px" version="1.1" width="500px" xmlns="http://www.w3.org/2000/svg"
                style={{ 'overflow': 'hidden', 'position': 'relative', 'left': '-0.362503px', 'top': '-0.875px' }} >
                <g transform="matrix(0.8,0,0,0.8,0,0)">
                    {regions.map((el, index) => {
                        const city = arr.find(foo => foo.name === el.name)
                        return (
                            <path key={index} fill={generateBlueGradient(city?.population ? city?.population : 0, maxPopulation)} stroke='#ffffff' d={el.map} strokeWidth="0.7575000000000001" strokeOpacity="0.5"></path>
                        )
                    })}
                </g>
            </svg>
        </Wrapper>
    );
};

export default MoscowDistrictMap;