import React from 'react'
import PickerDateAndTime from '../components/PickerDateAndTime'
import  { Container }  from '@mui/material'


export interface HomePageProps {
  propsHome:{
    setFloorsFrom: Function,
    setFloorsTo: Function,
    setSelectedValueFrom:Function,
    setSelectedValueTo: Function,
    setfromInfo: Function,
    setToInfo: Function,
  }
}
export default function HomePage({propsHome}: HomePageProps) {




  return (
    
    <div >
      <Container sx={{ display: { xs: 'none', md: 'flex' }, justifyContent:'center'  }}>
      <img src="https://i.postimg.cc/htv0Hw71/1000-F-227879660-HYaf2vj-He-LLUE49obkwmge-SKh-IJ0k-ECr-removebg-preview.png"   />
    </Container >

      <PickerDateAndTime propsHome={propsHome}/>  

  
    </div>
  )
}

