import React from 'react'
import ProgressIndicator from './progress-indicator'
import Box from './box'
import { swiftTheme } from '../styles'

const { colors } = swiftTheme

interface ILPProps {
  barColor?: string
}

function IndeterminateLinearProgress({
  barColor = colors.neutral[50],
}: ILPProps) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 30
        return Math.min(oldProgress + diff, 100)
      })
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box>
      <ProgressIndicator color={barColor} value={progress} width="100%" />
    </Box>
  )
}

export default IndeterminateLinearProgress
