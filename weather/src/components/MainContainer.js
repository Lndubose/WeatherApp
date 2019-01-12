import React from 'react';

const MainContainer = props => {
    if (!Object.keys(props.data).length) {
        return <div>Lodaing...</div>;
    } else {
        return (
            <div>
                <h2>{props.data.name}</h2>
                <div>
                    <img
                        src={`http://openweathermap.org/img/w/${
                            props.data.weather[0].icon
                        }.png`}
                        alt=""
                    />
                    <h3>{props.data.main.temp - 273.15}° Celsius</h3>
                </div>
            </div>
        );
    }
};

export default MainContainer;
