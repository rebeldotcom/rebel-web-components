import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import zxcvbn from 'zxcvbn'
import ProgressIndicator from './progress-indicator'
import Stack from './stack'
import Text from './text'
import { swiftTheme } from '../styles'

const { colors } = swiftTheme

interface PasswordStrengthBar {
  borderRadius?: number
  minLength?: number
  onChangeScore: (score, feedback) => void
  password: string
  userInputs: string[]
  scorePercentage?: number[]
  scoreWords?: string[]
  scoreColors?: string[]
  width?: string
  height?: string
  showLabels?: boolean
}

const StyledStack = styled(Stack)`
  flex-direction: column;
  text-align: end;
  width: 100%;
`

function PasswordStrengthBar({
  password = '',
  width = '100%',
  height = '10px',
  borderRadius,
  onChangeScore,
  minLength = 8,
  userInputs = [],
  scorePercentage = [0, 20, 50, 80, 100],
  scoreWords = ['weak', 'weak', 'okay', 'good', 'strong'],
  scoreColors = [
    '',
    colors.destructive[500],
    colors.warning[300],
    colors.success[300],
    colors.success[500],
  ],
  showLabels = false,
  showFeedback = false,
}) {
  const [pwScore, setScore] = useState(0)
  const [pwFeedback, setFeedback] = useState(null)
  const [previousPw, setPrevPw] = useState(password)

  const calculateScore = () => {
    setPrevPw(password)
    if (password.length >= minLength) {
      const { score, feedback } = zxcvbn(password, userInputs)
      setScore(score)
      setFeedback(feedback)
    } else {
      setScore(0)
      setFeedback({
        warning: `Password must be at least ${minLength} characters`,
      })
    }
  }

  useEffect(() => {
    if (onChangeScore) onChangeScore(pwScore, pwFeedback)
  }, [pwScore, previousPw, pwFeedback])

  useEffect(() => {
    if (previousPw !== password) {
      calculateScore()
    }
  }, [password])

  return (
    <StyledStack>
      {showLabels && password !== '' && (
        <Text variant="milli" width={width}>
          {scoreWords[pwScore]}
        </Text>
      )}
      <ProgressIndicator
        borderRadius={borderRadius}
        color={scoreColors[pwScore]}
        height={height}
        max={100}
        value={scorePercentage[pwScore]}
        variant="inverted"
        width={width}
      />
      {showFeedback && (
        <Text variant="milli" width={width}>
          {pwFeedback?.warning}
        </Text>
      )}
    </StyledStack>
  )
}

export default PasswordStrengthBar
