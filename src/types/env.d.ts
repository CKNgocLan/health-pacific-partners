export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LAT: number,
        NEXT_PUBLIC_GOOGLE_HEAD_QUARTER_LNG: number,
        NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string
    }
  }
}
