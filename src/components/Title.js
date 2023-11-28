import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { data } from '../data/data';

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    aling-items: center;
    padding: 16px 32px;
`

const SelectWrapper = styled.header`
    display: flex;
    align-items: center;
    heigth: 40px;
`

const TitleImage = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px;
    min-height: 90px;
`

const Img = styled.img`
    width: 40px;
`

const Title = ({ city, setCity }) => {

    const handleChange = (value) => {
        const selectedVal = [];
        value.forEach(el => selectedVal.push(data.find(foo => foo.name === el)))
        console.log(selectedVal.length)
        if (selectedVal.length === 0) {
            setCity([{
                name: 'Московской области',
                image: 'mo.gif',
            }])
        } else setCity(selectedVal)

    };

    return (
        <Wrapper>
            {
                city.length > 1 ?
                    <TitleImage>
                        <Img alt='Московская Область' src={require(`../images/mo.gif`)} />
                        <h1>Мониторинг населения Московской области</h1>
                    </TitleImage> :
                    <TitleImage>
                        <Img alt={city[0].name} src={require(`../images/${city[0].image}`)} />
                        <h1>Мониторинг населения {city[0].name}</h1>
                    </TitleImage>
            }
            <SelectWrapper>
                <Select
                    mode="multiple"
                    style={{
                        width: '350px',
                    }}
                    placeholder="Выберите округ"
                    onChange={handleChange}
                    options={data.map(el => ({ value: el.name, label: el.name }))}
                />
            </SelectWrapper>
        </Wrapper>
    );
};

export default Title;