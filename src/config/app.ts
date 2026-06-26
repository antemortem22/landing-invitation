export const APP_MODES = ['demo', 'production'] as const

export type AppMode = (typeof APP_MODES)[number]

function resolveAppMode(rawMode: string | undefined): AppMode {
  if (rawMode === 'demo' || rawMode === 'production') {
    return rawMode
  }

  return 'demo'
}

export const appMode = resolveAppMode(import.meta.env.VITE_APP_MODE)
export const isDemoMode = appMode === 'demo'
