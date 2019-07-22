import React, { Component } from 'react';
import { connect } from 'react-redux';

import MapComponent from '../../common/map';

import { getKTMData, setKTMData } from './data/action';

import './styles/index.scss';

class LandingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            mapData: [],
            date: {
                startDate: '',
                endDate: ''
            }
        }
        this.getData = this.getData.bind(this);
        this.formatResponse = this.formatResponse.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ktmData && nextProps.ktmData !== this.props.ktmData) {
            this.formatResponse(nextProps.ktmData);
        }
        if (nextProps.setKTMData && nextProps.setKTMData !== this.props.setKTMData) {
            this.getData();
        }
    }
    
    getData() {
        const { startDate, endDate } = this.state.date;
        this.props.getKTMData(startDate, endDate)
    }

    formatResponse(data) {
        let mapData = data.map(item => {
            return {
                dateTime: item.dateTime,
                coordinates: item.coordinates.value,
                engineRPM: item.engineRPM.value,
                wheelBasedSpeed: item.wheelBasedSpeed.value
            }
        });
        this.setState({
            ...this.state,
            tableData: data,
            mapData
        })
    }

    onDateChange(ev, type) {
        this.setState({
            ...this.state,
            date: {
                ...this.state.date,
                [type]: ev.target.value
            }
        })
    }

    setData() {
        this.props.setKTMData();
    }

    render() {
        return (
            <div className='landing-wrapper'>
                <h2 className='page-title'>Your bike data</h2>
                
                <div>
                    <input type="date" value={this.state.date.startDate} placeholder='Start Date' onChange={ev => this.onDateChange(ev, 'startDate')}/>
                    <input type="date" value={this.state.date.endDate} placeholder='End Date' onChange={ev => this.onDateChange(ev, 'endDate')}/>
                    <button className='btn btn-primary' onClick={ev => this.getData()}>Get Data</button>
                    <button className='btn btn-secondary' onClick={ev => this.setData()}>Set Data</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Date Time</th>
                            <th>Selected Gear</th>
                            <th>Maximum Speed</th>
                            <th>ABS</th>
                            <th>RPM</th>
                            <th>Engine Torque</th>
                            <th>Engine Temp</th>
                            <th>Outside Temp</th>
                            <th>Current Fuel Consumption (l/h)</th>
                            <th>Fuel Level</th>
                            <th>Driving Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableData && this.state.tableData.map(data => {
                                return (
                                    <tr key={data._id}>
                                        <td>{new Date(parseInt(data.dateTime)).toLocaleDateString()} {new Date(parseInt(data.dateTime)).toLocaleTimeString()}</td>
                                        <td>{data.selectedGear.value}</td>
                                        <td>{data.wheelBasedSpeed.value}</td>
                                        <td>{data.antiLockBraking.value}</td>
                                        <td>{data.engineRPM.value}</td>
                                        <td>{data.engineTorque.value}</td>
                                        <td>{data.engineCoolantTemperature.value}</td>
                                        <td>{data.outsideTemperature.value}</td>
                                        <td>{(data.currentFuelConsumption.value * (3.6)).toFixed(2)}</td>
                                        <td>{(data.fuelLevel.value * 100).toFixed(1)}%</td>
                                        <td>{data.drivingMode.value}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='map-container'>
                    <MapComponent data={this.state.mapData} />
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    count: state.registerReducer.count,
    ktmData: state.ktmDataReducer.ktmData,
    setKTMData: state.ktmDataReducer.setKTMData
})

const mapDispatchToProps = dispatch => {
    return {
        getKTMData: (startDate, endDate) => dispatch(getKTMData(startDate, endDate)),
        setKTMData: () => dispatch(setKTMData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingComponent);