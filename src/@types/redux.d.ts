import 'react-redux'

import { IRootState } from '../store/reducers'

declare module 'react-redux' {
    export interface DefaultRootState extends IRootState { }
}