import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
`

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
`

const PopoverTrigger = styled.button`
  border: none;
  transition: 0.2s;
  cursor: pointer;
  background: transparent;
  padding: 4px;
  border-radius: 50%;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const PopoverContent = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;
  z-index: 1000;
  white-space: nowrap;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  animation: ${({ isVisible }) => (isVisible ? fadeInSlideDown : 'none')} 0.3s
    ease-in-out;
  transition: opacity 0.2s ease-in-out;

  & > div {
    width: 100%;
    height: 100%;
    position: relative;
    background: transparent;
  }
`

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border: solid 15px;
  border-color: transparent transparent #e4e4e4;
  top: 0;
  left: 50%;
  height: fit-content;
  transform: translateX(-50%) translateY(-150%);
`

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode
}

function Popover({ children, trigger, ...rest }: PopoverProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const popoverRef = useRef(null)
  const triggerRef = useRef(null)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsVisible(false) // Close the popover if clicked outside
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <PopoverWrapper className="popover-container">
      <PopoverTrigger
        ref={triggerRef}
        aria-controls="popover-content"
        aria-expanded={isVisible}
        aria-haspopup="true"
        className="popover-trigger"
        onClick={toggleVisibility}
        type="button"
      >
        {trigger}
      </PopoverTrigger>
      {isVisible && (
        <PopoverContent
          ref={popoverRef}
          aria-modal="true"
          className="popover-content"
          id="popover-content"
          isVisible={isVisible}
          role="dialog"
          {...rest}
        >
          <div id="relative-wrapper">
            <Triangle />
            {children}
          </div>
        </PopoverContent>
      )}
    </PopoverWrapper>
  )
}

export default Popover
