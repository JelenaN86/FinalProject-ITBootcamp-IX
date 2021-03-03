import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { AccountBox } from '../../components/accountBox'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { InnerPageContainer, PageContainer } from '../../components/pageContainer'

const StyledInnerContainer = styled(InnerPageContainer)`
    margin-top: 4em;
`

const CustomerAccessPage = (props) =>{
    const { action } = useParams()
    

    return(
        <PageContainer>
            <Navbar />
            <StyledInnerContainer>
                <AccountBox initialActive={action}/>
            </StyledInnerContainer>
            <Footer />
        </PageContainer>
    )
}
export default CustomerAccessPage