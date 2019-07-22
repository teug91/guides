import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Icon } from '../../components'
import { info } from '../../constants/icons'
import { code } from '../../constants/colors'

const StyledLink = styled(Link)`
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledIcon = styled(Icon)`
    width: 32px;
    height: 32px;
`

export const AboutLink = () => (
    <StyledLink title="About this website" to="/about">
        <StyledIcon icon={info} color={code} />
    </StyledLink>
)
