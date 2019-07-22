import React, { Component } from 'react';
import { connect } from 'react-redux';

import SliderComponent from '../../../common/Slider';

import { getKTMData } from '../data/action';

class BikeComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            sliderItems: []
        }
    }

    componentDidMount() {
        if (!this.props.ktmData || this.props.ktmData.length === 0) {
            this.props.getKTMData(null, null);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { ktmData } = nextProps;
        const config = {};
        ktmData && ktmData.forEach(data => {
            config.maxSpeed = config.maxSpeed && config.maxSpeed > data.wheelBasedSpeed.value ? config.maxSpeed : data.wheelBasedSpeed.value;
            config.engineTorque = config.engineTorque && config.engineTorque > data.engineTorque.value ? config.engineTorque : data.engineTorque.value;
            config.engineRPM = config.engineRPM && config.engineRPM > data.engineRPM.value ? config.engineRPM : data.engineRPM.value;
            config.currentFuelConsumption = config.currentFuelConsumption ? config.currentFuelConsumption + data.currentFuelConsumption.value : 0 + data.currentFuelConsumption.value;
        })
        console.log(config);
    }

    render() {
        return (
            <section>
                <h2 className='page-title'>Bike Details</h2>
                <SliderComponent />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ktmData: state.ktmDataReducer.ktmData
})

const mapDispatchToProps = dispatch => {
    return {
        getKTMData: (startDate, endDate) => dispatch(getKTMData(startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BikeComponent);