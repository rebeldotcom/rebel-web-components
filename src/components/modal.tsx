/* eslint-disable no-use-before-define */
import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Box from './box'
import Icon from './icon'
import Button from './button'

const hasDOM = typeof window !== 'undefined'

const ModalContext = createContext(null)

type ModalProviderProps = {
  children: React.ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const modalNode = useRef<HTMLDivElement>(null!)

  return (
    <ModalContext.Provider value={modalNode}>
      {children}
      <div ref={modalNode} id="modal" />
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLElement | null>(null)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const MemoModal = () =>
    function Modal({
      width,
      bgProps,
      children,
      containerProps,
      onBgClick,
      onEscapeKey,
      closeBtnCb,
      id,
    }) {
      const bgRef = useRef<HTMLDivElement>(null)
      const modalNode = useContext(ModalContext)

      if (!modalNode) {
        throw new Error(`useModal must be used within a ModalProvider`)
      }

      useEffect(() => {
        if (isOpen && hasDOM) {
          document.addEventListener('keydown', handleKeydown)
          document.body.style.overflow = 'hidden'
        }

        return () => {
          if (hasDOM) {
            document.removeEventListener('keydown', handleKeydown)
            document.body.style.overflow = 'auto'
          }
        }
      }, [isOpen])

      const handleBackgroundClick = e => {
        if (onBgClick && bgRef.current && bgRef.current === e.target) {
          e.stopPropagation()
          onBgClick()
        }
      }

      const handleKeydown = e => {
        if (e.key === 'Escape' && onEscapeKey) {
          onEscapeKey()
        }
      }

      return (
        isOpen &&
        ReactDOM.createPortal(
          <Box
            id={id}
            ref={bgRef}
            alignItems={['flex-end', 'center']}
            bg="overlay"
            height="100vh"
            justifyContent="center"
            left="0"
            onMouseDown={handleBackgroundClick}
            overflow="auto"
            position="fixed"
            top="0"
            width="100vw"
            zIndex="modal"
            {...bgProps}
          >
            <Box
              ref={containerRef}
              alignItems="stretch"
              bg="white"
              borderRadius="large"
              flexDirection="column"
              overflow="auto"
              p={4}
              position="relative"
              role="dialog"
              tabIndex="-1"
              width={[1, width || '52rem']}
              {...containerProps}
            >
              {closeBtnCb && (
                <Button
                  alignSelf="flex-end"
                  ariaLabel="Close modal"
                  color="black"
                  id="modalCloseButton"
                  onClick={closeBtnCb}
                  position="absolute"
                  right="0.8rem"
                  top="0.8rem"
                  variant="minimal"
                >
                  <Icon
                    height={32}
                    name="close"
                    title="Close modal icon"
                    titleId="closeModalIcon"
                    viewBox="0 0 32 32"
                    width={32}
                  />
                </Button>
              )}
              {children}
            </Box>
          </Box>,
          modalNode.current
        )
      )
    }

  return { openModal, closeModal, isOpen, Modal: MemoModal, containerRef }
}

export { ModalProvider, useModal }
