import React from 'react'
import { AditionalInfo, Categories, Footer, Hero } from '../../components'
import { mainPages } from '../../styles'

const ManageShopping = () => {
  return (
    <main className={mainPages}>
    <Hero />
    <AditionalInfo />
    <Categories />
    <div>Manage User</div>
    <Footer />
  </main>
  )
}

export default ManageShopping