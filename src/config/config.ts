const loadEnvVariables = (name: string): string => {
  const env = process.env[name]
  
  if(!env) throw new Error(`Env variable ${name} is not found. Check your configuration.`)
  return env
}

export const host: string = loadEnvVariables('DB_HOST')
export const port: number = Number(loadEnvVariables('DB_PORT'))
export const database: string = loadEnvVariables('DB_NAME')
export const user: string = loadEnvVariables('DB_USER')
export const password: string = loadEnvVariables('DB_PASSWORD')
