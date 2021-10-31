const loadEnvVariables = (name: string): string => {
  const env = process.env[name]
  
  if(!env) throw new Error(`Env variable ${name} is not found. Check your configuration.`)
  return env
}

module.exports = {}
