export { QueryCache } from './queryCache'
export { QueryClient } from './queryClient'
export { setBatchNotifyFn, setNotifyFn } from './notifyManager'
export { setLogger } from './logger'
export { setFocusHandler } from './focusHandler'
export { setOnlineHandler } from './onlineHandler'
export { hashQueryKey, isCancelledError, isError } from './utils'

// Types
export * from './types'
export type { CancelledError } from './utils'
export type { Logger } from './logger'
export type {
  OnMutateContext,
  OnMutatePluginFunction,
  OnQueryContext,
  OnQueryPluginFunction,
  Plugin,
} from './plugins'
export type { Query } from './query'
