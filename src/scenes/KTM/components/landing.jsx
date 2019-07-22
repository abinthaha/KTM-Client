import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/landing.scss';

class LandingCardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardItems: [
                {
                    id: 1,
                    label: 'Total Km',
                    value: '1200 Km',
                    imgUrl: 'https://i.pinimg.com/originals/c2/db/67/c2db670d6aeb03e69126993b0dbc9d8c.jpg'
                }, {
                    id: 2,
                    label: 'Last Service',
                    value: 'April 20, 2019',
                    imgUrl: 'http://www.innovationwarehouse.org/wp-content/uploads/2016/08/maxresdefault.jpg'
                }, {
                    id: 3,
                    label: 'Next service',
                    value: 'August 2, 2019',
                    imgUrl: 'https://i.ytimg.com/vi/ZPY0gN5dgkM/maxresdefault.jpg'
                }, {
                    id: 4,
                    label: 'Vehicle Condition',
                    value: 'Good',
                    imgUrl: 'http://s2.paultan.org/image/2018/06/2018-KTM-Duke-790-The-Scalpel-Action-4-e1528461092943-630x517.jpg'
                }, {
                    id: 5,
                    label: 'Average Speed',
                    value: '64 Km/h',
                    imgUrl: 'https://gaadiwaadi.com/wp-content/uploads/2017/11/2018-KTM-790-Duke-India-Launch-Price-Engine-Specs-Features-Performance-Top-Speed-4.jpg'
                }, {
                    id: 6,
                    label: 'Average Mileage',
                    value: '23 Km/l',
                    imgUrl: 'http://blog.motorcycle.com/wp-content/uploads/2015/07/071015-2014-ktm-1290-super-duke-r-fuel-tank.jpg'
                }
            ]
        }
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return (
            <section>
                <h2 className='page-title'></h2>
                <ul className='flip-wrapper'>
                    {
                        this.state.cardItems.map(cardItem => {
                            return (
                                <li key={cardItem.id} className='flip-card'>
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front" style ={ { backgroundImage: "url("+ cardItem.imgUrl +")" } }>
                                            <span className='card-label'>{cardItem.label}</span>
                                        </div>
                                        <div className="flip-card-back">
                                            <span className='card-label'>{cardItem.label}</span>
                                            <h1>{cardItem.value}</h1>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ktmData: state.ktmDataReducer.ktmData
})

export default connect(mapStateToProps, null)(LandingCardComponent);