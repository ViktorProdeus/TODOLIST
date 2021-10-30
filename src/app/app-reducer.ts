import {authAPI} from "../api/todolists-api";
import {setIsLoggedInAC} from "../features/Login/auth-reducer";
import {Dispatch} from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppErrorAC(state, action: PayloadAction<{error: string | null}>) {
            state.error = action.payload.error
        },
        setAppStatusAC(state, action: PayloadAction<{status: RequestStatusType}>) {
            state.status = action.payload.status
        },
        setAppInitializedAC(state, action: PayloadAction<{value: boolean}>) {
            state.isInitialized = action.payload.value
        }
    }
})

export const appReducer = slice.reducer; /*(state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }
}*/

export type RequestStatusType =  'idle' | 'loading' | 'succeeded' | 'failed'
// export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    // status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    // error: string | null
    // isInitialized: boolean
// }

export const {setAppErrorAC, setAppStatusAC, setAppInitializedAC} = slice.actions /*(error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)*/
 /*(status:  RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)*/
 /*(value:  boolean) => ({ type: 'APP/SET-IS-INITIALIZED', value } as const)*/

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}))
        }

        dispatch(setAppInitializedAC({value: true}))
    })
}

// export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
// export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
//
// type ActionsType =
//     | SetAppErrorActionType
//     | SetAppStatusActionType
// | ReturnType<typeof setAppInitializedAC>



