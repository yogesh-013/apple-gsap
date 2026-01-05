import React, { Suspense } from 'react'
import useMacbookStore from '../store'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MacbookModel14 from './models/Macbook-14.jsx'
import StudioLights from './StudioLights.jsx'
import ModelSwitcher from './three/ModelSwitcher.jsx'
import { useMediaQuery } from 'react-responsive'
function ProductViewer() {
  const { color, setColor, scale, setScale} = useMacbookStore()
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});
  return (
    <section className="product-viewer">
        <h2 className="product-h2">Take a closer look.</h2>
        
  <div className='product-controls'>
   <p className='product-info'>Macboook {scale} in Space {color}</p>
        <div className='flex-center gap-5 mt-5'>
            <div className='product-color-control'>
               <div
                    onClick={() => setColor('#adb5bd')}
                            className={clsx('product-c-div bg-neutral-400', color === '#adb5bd' && 'product-active')}
                        />
                        <div
                 onClick={() => setColor('#2e2c2e')}
                            className={clsx('product-c-div bg-neutral-950', color === '#2e2c2e' && 'product-active')}
                        />
            </div>
            <div className='product-size-control'>
         <div
  onClick={() => setScale(0.06)}
  className={clsx(
    "product-s-div",
    scale === 0.06 && "bg-white text-black",
    scale !== 0.06 && "bg-transparent text-white"
  )}
>

                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(
                                "product-s-div",
                                scale === 0.08 && "bg-white text-black",
                                scale !== 0.08 && "bg-transparent text-white"
                            )}
                        >
                            <p>16"</p>
                        </div>
            </div>
        </div>
        </div>

        <Canvas className='product-canvas' camera={{position:[0,2,5] , fov: 50 , near:0.1, far:1000 }}>
            <StudioLights/>
                <ModelSwitcher scale={isMobile ? (scale - 0.03) : scale} isMobile={isMobile} />
         
      
        </Canvas>
       
    </section>
  )
}

export default ProductViewer