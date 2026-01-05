import React from 'react'

function ProductViewer() {
  return (
    <section className="product-viewer">
        <h2 className="product-h2">Take a closer look.</h2>
  <div className='product-controls'>
   <p className='product-info'>Macboook 16" in Space Black</p>
        <div className='flex-center gap-5 mt-5'>
            <div className='product-color-control'>
                <div className='product-c-div bg-neutral-300'/>
                <div className='product-c-div bg-neutral-900'/>
            </div>
            <div className='product-size-control'>
                <div className='product-s-div'><p>16"</p></div>
                <div className='product-s-div'><p>14"</p></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ProductViewer
