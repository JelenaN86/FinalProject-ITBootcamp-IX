import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import BrandLogo from '../../components/brandlogo'
import TopSectionImg from '../../images/services/anton-y-bjqTUUw2Q-unsplash.jpg'
import TheBestSpecialistsImg from '../../images/services/Cleaning PC_Isometric.png'
import {Marginer} from '../../components/marginer'
import Button from '../../components/button'
import { deviceSize } from '../../components/responsive'

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background: url(${TopSectionImg}) no-repeat;
    background-position: 0px -150px;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        height: 700px;
        background-position: 0px 0px;
  }
`
const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38, 70, 83, 0.9);
    display: flex;
    flex-direction: column;
`
const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${deviceSize.mobile}px){
      justify-content: center;
  }
`
const StandoutImg = styled.div`
    width: 37em;
    height: 34em;
    img{
        width:100%;
        height: 100%;
    }
`
const LogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        align-items: center;
  }
`
const SloganText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: #fff;
    font-weight: 500;
    font-size: 35px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
        font-size: 24px;
  }
`


const TopSection = (props)=>{
    const {children} = props

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})

    return(

        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                <LogoContainer>
                    <BrandLogo logoSize={isMobile ? 40 : 65} textSize={isMobile ? 35 : 55}/>
                    <Marginer direction="vertical" margin={8}/>
                    <SloganText>Find the right specialist</SloganText>
                    <SloganText>For the job</SloganText>
                    <Marginer direction="vertical" margin={15}/>
                    <Button>Join Now</Button>
                </LogoContainer>
                {!isMobile && 
                <StandoutImg>
                    <img src={TheBestSpecialistsImg} alt="Best in the field"/>
                </StandoutImg>
                }
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    )
}
export default TopSection