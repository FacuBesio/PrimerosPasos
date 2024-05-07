import React from 'react'
import title from "../../assets/title.png"
const Title = () => {
  return (
    <section className='relative'>
    <div className='flex justify-center items-center p-4'>
        <img  src={title} alt="titulo" />

    <div className='absolute right-6'>
      <form className='flex gap-2' action="">
        <input className="rounded-md" type="text" />
        <button>Search</button>
      </form>
    </div>
    </div>
    </section>
  )
}

export default Title