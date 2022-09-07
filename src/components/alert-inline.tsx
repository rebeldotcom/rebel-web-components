import React from 'react'
import { swiftTheme } from '../styles'
import Box from './box'
import Text from './text'
import Icon from './icon/icon'
import Button from './button'

const {
  colors: { primary, neutral, success, destructive, warning },
} = swiftTheme

const getAlertColorScheme = variant => {
  switch (variant) {
    case 'success':
      return {
        bg: success[50],
        border: success[200],
        icon: success[800],
        title: success[800],
        body: success[700],
      }

    case 'error':
      return {
        bg: destructive[50],
        border: destructive[200],
        icon: destructive[800],
        title: destructive[800],
        body: destructive[700],
      }
    case 'warning':
      return {
        bg: warning[50],
        border: warning[200],
        icon: warning[800],
        title: warning[800],
        body: warning[700],
      }
    case 'primary':
      return {
        bg: primary[50],
        border: primary[200],
        icon: primary[800],
        title: primary[800],
        body: primary[700],
      }

    default:
      return {
        bg: neutral[50],
        border: neutral[200],
        icon: neutral[800],
        title: neutral[800],
        body: neutral[700],
      }
  }
}

type AlertVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error'

interface AlertInlineProps {
  notificationTitle?: string
  body: string
  variant: AlertVariant
  icon: string
  showTitle?: boolean
  onClose?: () => void
}

function AlertInline({
  notificationTitle = 'Note',
  showTitle = true,
  body,
  variant = 'neutral',
  icon = 'notification',
  onClose,
  ...props
}: AlertInlineProps) {
  const colorScheme = getAlertColorScheme(variant)

  return (
    <Box
      bg={colorScheme.bg}
      borderColor={colorScheme.border}
      borderRadius="6px"
      justifyContent="space-between"
      p={3}
      {...props}
    >
      <Box flexDirection="row">
        <Icon color={colorScheme.icon} name={icon} width={12} />
        <Box flexDirection="column" ml={2}>
          {showTitle && (
            <Text
              color={colorScheme.title}
              textTransform="capitalize"
              variant="kiloBold"
            >
              {notificationTitle}
            </Text>
          )}
          <Text color={colorScheme.body} variant="pound">
            {body}
          </Text>
        </Box>
      </Box>
      {onClose && (
        <Box alignItems="flex-start">
          <Button onClick={onClose} variant="minimal">
            <Icon color={colorScheme.icon} name="close" width={32} />
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default AlertInline
