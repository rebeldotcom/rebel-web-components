import React, { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { css } from "styled-components"
import Box, { BoxProps } from './box'
import Text from './text'
import Stack from './stack'
import Select from './select'
import Icon from './icon/icon'

const PaginationButton = styled(Box)`
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  transition: 0.3s;
`

const PrevButton = styled(Icon)`
  transform: rotate(180deg);
`

type PaginationProps = BoxProps & {
  onPageChange: (offset: number, limit?: number) => {}
  rowsPerPage: number
  total: number
  count?: number
  rowsPerPageOptions?: {
    display: number
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

function Paginator({
  total,
  onPageChange,
  rowsPerPage,
  rowsPerPageOptions = defaultRowsPerPage,
  showRowSelector = false,
  showResultCount = false,
  ...props
}: PaginationProps): React.ReactNode {
  const [current, setCurrent] = useState(1)
  const [countPerPage, setCountPerPage] = useState<number>(rowsPerPage)
  let offset = (current - 1) * countPerPage
  const didMount = useRef(true) // used to track if this is the first time the component renders
  
  /* Handles when the user clicks on a page number */
  const onPageSelect = (page: number, idx: number) => {
    setCurrent(page)
  }

  const getPaginationPages = () => {
    const pages = []
    const expectedVisiblePagesCount = 6 //expect 6 total: start ... 4 inbetween ... end 
    const totalPages = Math.ceil(total / countPerPage)

    let forwardPages = 2
    let backwardPages = 1
    
    let start = ((current - backwardPages) <= 1) ? 2 : (current - backwardPages)
    let end = ((current + forwardPages) >= totalPages) ? (totalPages - 1) : (current + forwardPages)

    //handle edge cases for start and end
    if(totalPages > expectedVisiblePagesCount){//we have more pages than we want to show at once

      const middlePages = expectedVisiblePagesCount - 3 // -3 because start and end always show and 1 more because indexes are -1

      //check that forward pages will not look silly when we near start index bounds
      if ((current + forwardPages) >= totalPages){
        start = end - middlePages
      }

      //check that backward pages will not look silly when we near end index bounds
      if ((current - backwardPages) <= 1){
        end = start + middlePages 
      }


    } else { //just show all pages
      start = 2
      end = totalPages
    }



    //there is always page 1
    pages.push(1)

    //add elipsis if our index is past page 2 and if there is more pages than our expected max visible
    if (start > 2 && totalPages > expectedVisiblePagesCount) pages.push("...")

    // Add the range of pages
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  
    // Add "..." if there needs to be a gap before the last page
    if (end < totalPages - 1 && totalPages > expectedVisiblePagesCount) pages.push("...")
  
    // Always include the last page
    if (totalPages > 1) pages.push(totalPages)
  
    return pages
  }

  /* Handles when user clicks the next button */
  const prevButton = () => {
    if (current > 1) {
      const prevPage = current - 1
      const prevIndex = prevPage - 1
      onPageSelect(prevPage, prevIndex)
    }
  }

  /* Handles when the user clicks the prev button */
  const nextButton = () => {
    if (current < Math.ceil(total / countPerPage)) {
      const nextPage = current + 1
      const nextIndex = nextPage - 1
      onPageSelect(nextPage, nextIndex)
    }
  }

  const onRowSelectChange = (item: number) => {
    setCountPerPage(item)
    offset = 0
    setCurrent(1)
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
  }, [current, countPerPage])

  return (
    <Stack
      display="inline-flex"
      flexDirection="row"
      mt={3}
      width="100%"
      {...props}
    >
      {/* Primary Pagination logic  */}
      <Box key="pagination" alignItems="center" justifyContent="center">
          <Box
            style={{ gap: "8px", borderRadius: "1234px", cursor: "pointer", userSelect: "none" }}
            border-radius="1234px"
            pt={12} pr={20} pb={12} pl={20}
            mr={2}        
            opacity="0px"            
            onClick={prevButton}
            bg="neutral-50"
            border="1px solid #E5E7EB"
          >
            <PrevButton
              style={{userSelect: "none"}}
              name="arrow-right"
              mt={1}
            />Previous
          </Box>
        <Box>{/* might need to do something with length, grows and shrinks which is annoying */}
        {getPaginationPages().map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`} style={{ margin: "0 8px" }}>
              ...
            </span>
          ) : (
            <PaginationButton
              key={`page-${page}-${idx}`}
              style={{ cursor: "pointer" }}
              bg={current === page ? "magenta" : "neutral-50"}
              mr={3}
              onClick={(e) => {
                  const pageNumber = parseInt(page.toString())
                  onPageSelect(pageNumber, pageNumber - 1)
              }}
            >
              <Text>{page}</Text>
            </PaginationButton>
          )
        )}
        </Box>
        <Box          
        style={{ gap: "8px", borderRadius: "1234px", cursor: "pointer", userSelect: "none" }}
        pt={12} pr={20} pb={12} pl={20}  
        opacity="0px"
        bg="neutral-50"
        border="1px solid #E5E7EB"
        onClick={nextButton}
        >
          Next<Icon name="arrow-right" style={{userSelect: "none"}} mt={1} />
        </Box>
      </Box>
      {/* Display the number of results, and the range of data being shown */}
      {showResultCount && (
        <Text 
        font-family= "Inter"
        font-size= "14px"
        font-weight= "500"
        line-height= "16.94px"
        letter-spacing= "-0.01em"
        text-align= "left"
        text-underline-position= "from-font"
        text-decoration-skip-ink= "none"
        color="neutral-400"
        width={225}
        ml={2}
        mr={2} 
        mt={3}>
          Showing {offset + 1} to {total < countPerPage ? total : current * countPerPage}{' '}
          of {total}
        </Text>
      )}
      {/* Display a selector to choose number of rows to display */}
      {showRowSelector && (
        <Box mr={4} mt={1}>
          <Text alignSelf="center" mr={2} variant="milliBold">
            Rows per page:
          </Text>
          <Select
            css={css`
              select {
                border:none;
                width:auto;
                padding: 0 0 0 0;
                margin-top:8px;
                font-weight:600;
                font-size:1.2rem;
              }
              div{
                padding-top:0;
              }               
            `}
            pt={2}
            id="row-selector"
            onChange={e => {
              onRowSelectChange(parseInt(e.toString()))
            }}
            options={rowsPerPageOptions}
            value={countPerPage}
          />
        </Box>
      )}
    </Stack>
  )
}

export default Paginator