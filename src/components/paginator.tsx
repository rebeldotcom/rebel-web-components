import React, { useState, useRef, useLayoutEffect } from 'react'
import styled, { css } from 'styled-components'
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
  const [current, setCurrent] = useState<number>(1)
  const [countPerPage, setCountPerPage] = useState<number>(rowsPerPage)
  let offset = (current - 1) * countPerPage
  const didMount = useRef<boolean>(true)

  const onPageSelect = (page: number) => {
    setCurrent(page)
  }

  const getPaginationPages = () => {
    const pages = []
    const expectedVisiblePagesCount = 5 // expect 5 total: start ... 3 inbetween ... end
    const totalPages = Math.ceil(total / countPerPage)

    const forwardPages = 2
    const backwardPages = 1

    let start = current - backwardPages <= 1 ? 2 : current - backwardPages
    let end =
      current + forwardPages >= totalPages
        ? totalPages - 1
        : current + forwardPages

    if (totalPages > expectedVisiblePagesCount) {
      const middlePages = expectedVisiblePagesCount - 3 // -3 because start and end always show and 1 more because indexes are -1

      // check that forward pages will not look silly when we near start index bounds
      if (current + forwardPages >= totalPages) {
        start = end - middlePages
      }

      // check that backward pages will not look silly when we near end index bounds
      if (current - backwardPages <= 1) {
        end = start + middlePages
      }
    } else {
      // just show all pages
      start = 2
      end = totalPages
    }

    // there is always page 1
    pages.push(1)

    // add elipsis if our index is past page 2 and if there is more pages than our expected max visible
    if (start > 2 && totalPages > expectedVisiblePagesCount) pages.push('...')

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < totalPages - 1 && totalPages > expectedVisiblePagesCount)
      pages.push('...')

    // Always include the last page
    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  const prevButton = () => {
    if (current > 1) {
      const prevPage = current - 1
      onPageSelect(prevPage)
    }
  }

  const nextButton = () => {
    if (current < Math.ceil(total / countPerPage)) {
      const nextPage = current + 1
      onPageSelect(nextPage)
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
      <Box
        key="pagination"
        alignItems="center"
        fontFamily="Inter"
        justifyContent="center"
      >
        <Box
          bg="neutral-50"
          border="1px solid"
          borderColor="neutral-200"
          borderRadius="rounded"
          color="neutral-900"
          fontWeight="semi"
          mr={2}
          onClick={prevButton}
          opacity="0px"
          px={20}
          py={12}
          style={{
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <Icon
            height={24}
            name="chevron-left"
            style={{ userSelect: 'none', marginTop: '1px' }}
            width={24}
          />
          Previous
        </Box>
        <Box>
          {getPaginationPages().map((page, idx) =>
            page === '...' ? (
              <span key={`ellipsis-${idx}`} style={{ margin: '0 8px 0 0' }}>
                ...
              </span>
            ) : (
              <PaginationButton
                key={`page-${page}-${idx}`}
                bg={current === page ? 'magenta' : 'neutral-50'}
                color={current === page ? 'white' : 'black'}
                css={css`
                  padding: 4px 10px 0 10px;
                `}
                fontSize={12}
                fontWeight="semi"
                mr={3}
                onClick={() => {
                  const pageNumber = Number(page.toString())
                  onPageSelect(pageNumber)
                }}
                style={{ cursor: 'pointer' }}
              >
                <Text>{page}</Text>
              </PaginationButton>
            )
          )}
        </Box>
        <Box
          bg="neutral-50"
          border="1px solid"
          borderColor="neutral-200"
          borderRadius="rounded"
          color="neutral-900"
          fontWeight="semi"
          onClick={nextButton}
          opacity="0px"
          px={20}
          py={12}
          style={{
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          Next
          <Icon
            height={24}
            name="chevron-right"
            style={{ userSelect: 'none', marginTop: '1px' }}
            width={24}
          />
        </Box>
      </Box>
      {showResultCount && (
        <Text color="neutral-400" ml={2} mr={2} mt={3} width={225}>
          Showing {offset + 1} to{' '}
          {total < countPerPage ? total : current * countPerPage} of {total}
        </Text>
      )}
      {showRowSelector && (
        <Box color="neutral-400" mr={4} mt={1}>
          <Text alignSelf="center" mr={2} variant="milliBold">
            Rows per page:
          </Text>
          <Select
            css={css`
              select {
                border: none;
                width: auto;
                padding: 0 0 0 0;
                margin-top: 8px;
                font-weight: 600;
                font-size: 1.2rem;
                color: #9ca3af;
              }
              div {
                padding-top: 0;
              }
            `}
            id="row-selector"
            onChange={e => {
              onRowSelectChange(Number(e.toString()))
            }}
            options={rowsPerPageOptions}
            pt={2}
            value={countPerPage}
          />
        </Box>
      )}
    </Stack>
  )
}

export default Paginator
