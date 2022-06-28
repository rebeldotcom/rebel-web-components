import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { lineHeight } from 'styled-system'
import zxcvbn from 'zxcvbn'
import ProgressIndicator from './progress-indicator'
import Stack from './stack'
import Text from './text'

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
  scoreColors = ['', '#EF4444', '#FCD34D', '#86EFAC', '#22C55E'], // move these once we build out new design system
  showLabels = false,
}) {
  const [pwScore, setScore] = useState(0)
  const [pwFeedback, setFeedback] = useState('')
  const [previousPw, setPrevPw] = useState(password)

  const calculateScore = () => {
    setPrevPw(password)
    if (password.length >= minLength) {
      const { score, feedback } = zxcvbn(password, userInputs)
      setScore(score)
      setFeedback(feedback)
    } else {
      setScore(0)
      setFeedback(`Password must be at least ${minLength}`)
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
      <ProgressIndicator
        borderRadius={borderRadius}
        color={scoreColors[pwScore]}
        height={height}
        max={100}
        value={scorePercentage[pwScore]}
        variant="inverted"
        width={width}
      />
      {showLabels && (
        <Text variant="milli" width={width}>
          {scoreWords[pwScore]}
        </Text>
      )}
    </StyledStack>
  )
}

export default PasswordStrengthBar