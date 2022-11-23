import { useEffect, useReducer, useRef } from 'react'

type Action = 'start' | 'stop'

export type Control = {
  start: () => void
  stop: () => void
}

export type State = 'RUNNING' | 'STOPPED'

type OnUpdate = () => void

type Options = {
  interval: number
  autostart: boolean
  onUpdate?: OnUpdate
}

const reducer = (state: State, action: Action): State => {
  switch (action) {
    case 'start':
      return 'RUNNING'
    case 'stop':
      return 'STOPPED'
    default:
      return state
  }
}

export const useInterval = ({
  interval = 1000,
  autostart = true,
  onUpdate,
}: Partial<Options>): [State, Control] => {
  const onUpdateRef = useRef<OnUpdate>(() => {})
  const [state, dispatch] = useReducer(reducer, 'STOPPED')
  const start = () => {
    dispatch('start')
  }
  const stop = () => {
    dispatch('stop')
  }
  useEffect(() => {
    onUpdateRef.current = onUpdate ?? (() => {})
  }, [onUpdate])
  useEffect(() => {
    if (autostart) {
      dispatch('start')
    }
  }, [autostart])
  useEffect(() => {
    let timerId: any = undefined
    if (state === 'RUNNING') {
      timerId = setInterval(() => {
        onUpdateRef.current()
      }, interval)
    } else {
      timerId && clearInterval(timerId)
    }
    return () => {
      timerId && clearInterval(timerId)
    }
  }, [interval, state])
  return [state, { start, stop }]
}

export default useInterval