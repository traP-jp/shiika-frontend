// eslint-disable-next-line no-restricted-imports
import { Apis, Configuration } from './generated'

const apis = new Apis(new Configuration({ basePath: 'http://localhost:8080' }))

export default apis
// eslint-disable-next-line no-restricted-imports
export * from './generated'
