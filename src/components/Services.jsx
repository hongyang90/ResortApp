import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni?'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni?'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni?'
            },
            {
                icon: <FaBeer />,
                title: 'Best Beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni?'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services'>
                    {this.state.services.map((item, idx) => {
                        return <article key={idx} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}