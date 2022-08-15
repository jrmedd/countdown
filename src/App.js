import * as React from 'react'
import useInterval from './useInterval.js'
import { Theme, lightTheme } from './theme'
import styled, { css } from 'styled-components'

const StyledMain = styled.main(props => css`
  width: 65rem;
  max-width: 100vw;
  margin: 0 auto;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`)

const StyledDescriptionList = styled.dl(props => css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0;
  max-width: 100%;
`)

const DigitDisplay = styled.div(props => css`
  width: 32.5rem;
  height: 270rem;
  max-width: 100%;
  max-height: 25vh;
  background: ${props.background};
  color: ${props.color};
  display: flex;
  flex-flow: row-reverse;
  justify-content: center;
  align-items: center;
  gap: .25rem;
`)

const StyledTerm = styled.dt(props => css`
  font-size: 1.5rem;
  margin-top: 0.8rem;
`)

const StyledDescription = styled.dd(props => css`
  font-size: 2.5rem;
`)

function App () {
  const [timeNow, setTimeNow] = React.useState(new Date())
  const [startDate, setStartDate] = React.useState(new Date('2022-10-17T00:00:00.000Z'))
  const [daysRemaining, setDaysRemaining] = React.useState(0)
  const [hoursRemaining, setHoursRemaining] = React.useState(0)
  const [minutesRemaining, setMinutesRemaining] = React.useState(0)
  const [secondsRemaining, setSecondsRemaining] = React.useState(0)
  const [totalSecondsRemaining, setTotalSecondsRemaining] = React.useState(0)
  useInterval(() => {
    setTimeNow(new Date())
    setTotalSecondsRemaining(Math.floor((startDate - timeNow) / 1000))
  }, 500)
  React.useEffect(() => {
    const daysRemainingTemp = (totalSecondsRemaining / 60 / 60) / 24
    const hoursRemainingTemp = (daysRemainingTemp - Math.floor(daysRemainingTemp)) * 24
    const minutesRemainingTemp = (hoursRemainingTemp - Math.floor(hoursRemainingTemp)) * 60
    const secondsRemainingTemp = (minutesRemainingTemp - Math.floor(minutesRemainingTemp)) * 60
    setDaysRemaining(Math.floor(daysRemainingTemp))
    setHoursRemaining(Math.floor(hoursRemainingTemp))
    setMinutesRemaining(Math.floor(minutesRemainingTemp))
    setSecondsRemaining(Math.round(secondsRemainingTemp))
  }, [totalSecondsRemaining])
  return (
    <Theme>
      <StyledMain>
        <StyledDescriptionList>
          <DigitDisplay color={lightTheme.colourB} background={lightTheme.colourA}>
            <StyledTerm>
              days
            </StyledTerm>
            <StyledDescription>
              {daysRemaining}
            </StyledDescription>
          </DigitDisplay>
          <DigitDisplay color={lightTheme.colourA} background={lightTheme.colourB}>
            <StyledTerm>
              hours
            </StyledTerm>
            <StyledDescription>
              {hoursRemaining}
            </StyledDescription>
          </DigitDisplay>
          <DigitDisplay color={lightTheme.colourA} background={lightTheme.colourD}>
            <StyledTerm>
              minutes
            </StyledTerm>
            <StyledDescription>
              {minutesRemaining}
            </StyledDescription>
          </DigitDisplay>
          <DigitDisplay color={lightTheme.colourB} background={lightTheme.colourC}>
            <StyledTerm>
              seconds
            </StyledTerm>
            <StyledDescription>
              {secondsRemaining}
            </StyledDescription>
          </DigitDisplay>
        </StyledDescriptionList>
      </StyledMain>
    </Theme>
  )
}

export default App
