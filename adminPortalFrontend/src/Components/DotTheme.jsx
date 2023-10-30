import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import useMainContext from '../Helpers/useMainContext';

const DotsTheme = () => {
  
  const {theme} = useMainContext()
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
  
  };
  const backgroundMaskValue = !theme ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 };
  return (
    <div className='App'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          backgroundMask: {
            enable: true,
            cover: {
              value: backgroundMaskValue,
          },
          },
          background: {
             color: !theme ?  '#fffffff': '#000000',
           // color: '#000000',
            size: '100% 100%',
            repeat: 'no-repeat',
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            color: {
              value: '#000000',
              animation: {
                enable: true,
                speed: 700,
              },
            },
            move: {
              direction: 'top',
              enable: true,
              outModes: {
                default: 'out',
              },
              size: true,
              speed: {
                min: 1,
                max: 2,
              },
            },
            number: {
              value: 200,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 1,
              animation: {
                enable: false,
                startValue: 'max',
                destroy: 'min',
                speed: 0.2,
                sync: true,
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: 'random',
              move: true,
              animation: {
                enable: true,
                speed: 60,
              },
            },
            tilt: {
              direction: 'random',
              enable: true,
              move: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
              },
            },
            shape: {
              type: ['circle'],
            },
            size: {
              value: {
                min: 3,
                max: 5,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 30,
              },
              enlighten: {
                enable: true,
                value: 30,
              },
              enable: true,
              speed: {
                min: 15,
                max: 25,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              move: true,
              speed: {
                min: -15,
                max: 15,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default DotsTheme;