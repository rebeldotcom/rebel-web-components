import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import styled from 'styled-components'
import Box from './box'
import Text from './text'
import Stack from './stack'
import Select from './select'
import Icon from './icon/icon'

const PaginationButton = styled(Box)`
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 13px;
  transition: 0.3s;

  &:hover {
    background-color: #f7f7f7;
  }
`

const PrevButton = styled(Icon)`
  transform: rotate(180deg);
`

interface PaginationProps {
  onPageChange: (offset: number, limit?: number) => {}
  rowsPerPage: number
  total: number
  count?: number
  rowsPerPageOptions?: {
    display: any
    value: number
  }[]
  showRowSelector?: boolean
  showResultCount?: boolean
}

const defaultRowsPerPage = [
  { value: 10, display: 10 },
  { value: 50, display: 50 },
  { value: 100, display: 100 },
]

const Pagination = ({
  count = 3,
  total,
  onPageChange,
  rowsPerPage,
  rowsPerPageOptions = defaultRowsPerPage,
  showRowSelector = false,
  showResultCount = false,
  ...props
}: PaginationProps): React.ReactNode => {
  const [current, setCurrent] = useState(1)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [countPerPage, setCountPerPage] = useState(rowsPerPage)
  const [turns, setTurns] = useState(1)
  let offset = (current - 1) * countPerPage
  const didMount = useRef(true) // used to track if this is the first time the component renders

  const lastPage = Math.ceil(total / countPerPage)
  const lowerBound = Math.ceil((count - 1) / 2)

  /* Handles when the user clicks on a page number */
  const onPageSelect = (page, idx) => {
    setCurrent(page)
    if (idx === 0 && page !== 1) {
      setCurrentIdx(lowerBound)
      setTurns(turns - 1)
    } else if (idx > lowerBound) {
      setCurrentIdx(lowerBound)
      setTurns(turns + 1)
    } else {
      setCurrentIdx(idx)
    }
  }

  /* Handles when user clicks the next button */
  const prevButton = () => {
    if (current > 1) {
      const prevPage = current - 1
      const prevIndex = currentIdx < 1 ? lowerBound : currentIdx - 1
      onPageSelect(prevPage, prevIndex)
    }
  }

  /* Handles when the user clicks the prev button */
  const nextButton = () => {
    if (current < Math.ceil(total / countPerPage)) {
      const nextPage = current + 1
      const nextIndex = currentIdx >= count - 1 ? lowerBound : currentIdx + 1
      onPageSelect(nextPage, nextIndex)
    }
  }

  /**
   * We only want to re-render if the value of `current` changes (on a page selection)
   * We don't want the initial render
   */
  useLayoutEffect(() => {
    if (didMount.current) {
      didMount.current = false
      return
    }
    onPageChange(offset, countPerPage)
  }, [current])

  useEffect(() => {
    offset = 0
    setCurrent(1)
    setCurrentIdx(0)
    setTurns(1)
  }, [countPerPage])

  return (
    <Stack
      display="inline-flex"
      flexDirection="row"
      mt={3}
      width="100%"
      {...props}
    >
      {/* Display a selector to choose number of rows to display */}
      {showRowSelector && (
        <Box mr={4}>
          <Text alignSelf="center" mr={2} variant="milli">
            Rows per page:
          </Text>
          <Select
            id="row-selector"
            onChange={item => setCountPerPage(item)}
            options={rowsPerPageOptions}
            value={countPerPage}
          />
        </Box>
      )}
      {/* Display the number of results, and the range of data being shown */}
      {showResultCount && (
        <Text mr={4}>
          {offset + 1}-{current * countPerPage} of {total}
        </Text>
      )}

      {/* Primary Pagination logic  */}
      <Box key="pagination" alignItems="center" justifyContent="center">
        {/* Don't show previous button on page 1 */}
        {current > 1 && (
          <PrevButton
            mr={3}
            name="arrow-right"
            onClick={prevButton}
            title="back"
          />
        )}

        {new Array(count).fill(1).map((_, idx) => {
          const pageNumber =
            currentIdx > lowerBound ? current + idx : idx + turns
          if (pageNumber > lastPage) return null
          return (
            <PaginationButton
              key={`page-${pageNumber}-${idx}`}
              bg={current === pageNumber ? 'whiteDark' : 'greyLightest'}
              mr={3}
              onClick={() => onPageSelect(pageNumber, idx)}
            >
              <Text> {pageNumber} </Text>
            </PaginationButton>
          )
        })}

        {count > 1 && current < lastPage && (
          <Icon name="arrow-right" onClick={nextButton} title="forward" />
        )}
      </Box>
    </Stack>
  )
}

export default Pagination
