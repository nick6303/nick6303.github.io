import originApi from './origin'
import mock from './mock'

export default process.env.NODE_ENV === 'development' ? { ...originApi } : { ...mock }

// export default { ...mock }