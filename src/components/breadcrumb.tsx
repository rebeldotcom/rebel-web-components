import React from 'react'
import Box from './box'
import Stack from './stack'
import Text from './text'

interface BreadCrumbProps<T extends string> {
  /** Array of steps. Eg. ["Product", "Add-ons", "Check-out"] */
  steps: readonly T[]

  /** Current step we are on. Must be included in 'steps' array. */
  current: T
}

type State = 'past' | 'current' | 'future'

const determineState = <T extends string>(
  step: T,
  steps: readonly T[],
  current: T
): State => {
  if (step === current) {
    return 'current'
  }
  return steps.indexOf(step) < steps.indexOf(current) ? 'past' : 'future'
}

function Step({ state }: { state: State }) {
  switch (state) {
    case 'past':
      return (
        <Box
          alignItems="center"
          bg="supporting-orangePeel"
          borderRadius="circle"
          display="flex"
          justifyContent="center"
          size="24px"
          zIndex={1}
        >
          <Box bg="white" borderRadius="circle" size="8px" />
        </Box>
      )
    case 'current':
      return (
        <Box
          alignItems="center"
          bg="white"
          border="2px solid"
          borderColor="supporting-orangePeel"
          borderRadius="circle"
          boxShadow="0px 0px 0px 4px #d3d0f8"
          display="flex"
          justifyContent="center"
          size="24px"
          zIndex={1}
        >
          <Box bg="supporting-orangePeel" borderRadius="circle" size="8px" />
        </Box>
      )
    case 'future':
      return (
        <Box
          alignItems="center"
          bg="neutral-200"
          borderRadius="circle"
          display="flex"
          justifyContent="center"
          size="24px"
          zIndex={1}
        >
          <Box bg="white" borderRadius="circle" size="8px" />
        </Box>
      )
  }
}

/**
 * Navigational breadcrumb component to indicate progression through a series of steps.
 */
function BreadCrumb<T extends string>({ steps, current }: BreadCrumbProps<T>) {
  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Box alignItems="center" display="flex" width="100%">
        {steps.map((step, index) => {
          const state = determineState(step, steps, current)

          return (
            <React.Fragment key={step}>
              {index > 0 && (
                <Box
                  bg={
                    state === 'future' ? 'neutral-200' : 'supporting-orangePeel'
                  }
                  flex="1"
                  height="2px"
                />
              )}
              <Step state={state} />
            </React.Fragment>
          )
        })}
      </Box>

      <Box
        alignItems="center"
        justifyContent="space-between"
        mt={1}
        width="75%"
      >
        {steps.map(step => (
          <Text
            key={step}
            color="neutral-900"
            minWidth="80px"
            textAlign="center"
            variant="milliBold"
          >
            {step}
          </Text>
        ))}
      </Box>
    </Stack>
  )
}

export default BreadCrumb
