import React from 'react'
import Box from './box'
import Text from './text'
import Icon from './icon/icon'
import Button from './button'

type AlertVariant = 'success' | 'error' | 'warning' | 'primary' | 'neutral'
type SchemeVariant =
  | 'success'
  | 'destructive'
  | 'warning'
  | 'primary'
  | 'neutral'

type ColorScheme<T extends string> = {
  bg: `${T}-50`
  border: `${T}-200`
  icon: `${T}-800`
  title: `${T}-800`
  body: `${T}-700`
}

const colorMapping: Record<AlertVariant, SchemeVariant> = {
  success: 'success',
  error: 'destructive',
  warning: 'warning',
  primary: 'primary',
  neutral: 'neutral',
}

const getAlertColorScheme = (
  variant: AlertVariant
): ColorScheme<SchemeVariant> => {
  const color = colorMapping[variant]

  return {
    bg: `${color}-50`,
    border: `${color}-200`,
    icon: `${color}-800`,
    title: `${color}-800`,
    body: `${color}-700`,
  }
}

interface AlertInlineProps {
  notificationTitle?: string
  body: string | React.ReactNode
  variant: AlertVariant
  icon: string
  showTitle?: boolean
  onClose?: () => void
}

function AlertInline({
  showTitle = true,
  variant = 'neutral',
  icon = 'notification',
  notificationTitle = 'Note',
  body,
  onClose,
  ...props
}: AlertInlineProps) {
  const colorScheme = getAlertColorScheme(variant)

  return (
    <Box
      bg={colorScheme.bg}
      borderColor={colorScheme.border}
      borderRadius="larger"
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
