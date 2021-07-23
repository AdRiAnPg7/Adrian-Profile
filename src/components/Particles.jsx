import React from 'react'
// React Particles
import Particles from 'react-particles-js';
// Styles
import '../styles/Particles.css';

export default function ParticlesDesign() {
    return (
        <>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type:'circle',
                            stroke:{
                                width:8,
                                color:'#F6BF67'
                            }
                        }
                    }
                }}
            />
        </>
    )
}
