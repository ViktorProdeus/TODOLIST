export enum ACTIONS_TYPE {
    CHANGE_START_VALUE = 'Counter/CHANGE-START-VALUE',
    CHANGE_MAX_VALUE = 'Counter/CHANGE-MAX-VALUE',
    CHANGE_VALUE = 'Counter/CHANGE-VALUE',
    CHANGE_STATUS_SET_BTN = 'Counter/CHANGE-STATUS-SET-BTN',
    CHANGE_STATUS_INC_BTN = 'Counter/CHANGE-STATUS-INC-BTN',
    CHANGE_STATUS_RESET_BTN = 'Counter/CHANGE-STATUS-RESET-BTN',
}

const initialState = {
    start: 0,
    max: 5,
    value: 0,
    setBtnStatus: true,
    incBtnStatus: false,
    resetBtnStatus: false,
}

type ActionsType =
    ActionStartType
    | ActionMaxType
    | ActionValueType
    | ActionSetBtnStatusType
    | ActionIncBtnStatusType
    | ActionResetBtnStatusType;

type ActionStartType = {
    type: ACTIONS_TYPE.CHANGE_START_VALUE
    payload: {
        start: number
    }
};

type ActionMaxType = {
    type: ACTIONS_TYPE.CHANGE_MAX_VALUE
    payload: {
        max: number
    }
};

type ActionValueType = {
    type: ACTIONS_TYPE.CHANGE_VALUE
    payload: {
        value: number
    }
};

type ActionSetBtnStatusType = {
    type: ACTIONS_TYPE.CHANGE_STATUS_SET_BTN
    payload: {
        setBtnStatus: boolean
    }

};

type ActionIncBtnStatusType = {
    type: ACTIONS_TYPE.CHANGE_STATUS_INC_BTN
    payload: {
        incBtnStatus: boolean
    }

};

type ActionResetBtnStatusType = {
    type: ACTIONS_TYPE.CHANGE_STATUS_RESET_BTN
    payload: {
        resetBtnStatus: boolean
    }

};

export type initialStateType = typeof initialState;

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_START_VALUE :
        case ACTIONS_TYPE.CHANGE_MAX_VALUE :
        case ACTIONS_TYPE.CHANGE_VALUE :
        case ACTIONS_TYPE.CHANGE_STATUS_SET_BTN :
        case ACTIONS_TYPE.CHANGE_STATUS_INC_BTN :
        case ACTIONS_TYPE.CHANGE_STATUS_RESET_BTN :

            return {
                ...state, ...action.payload
            }
    }

    return state;
}

export const changeStart = (start: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_START_VALUE,
        payload: {
            start,
        },
    }
}
export const changeMax = (max: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        payload: {
            max,
        },
    }
}
export const changeValue = (value: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_VALUE,
        payload: {
            value,
        },
    }
}
export const changeStatusSetBtn = (status: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_STATUS_SET_BTN,
        payload: {
            setBtnStatus: status,
        },
    }
}
export const changeStatusIncBtn = (status: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_STATUS_INC_BTN,
        payload: {
            incBtnStatus: status,
        },
    }
}
export const changeStatusResetBtn = (status: boolean) => {
    return {
        type: ACTIONS_TYPE.CHANGE_STATUS_RESET_BTN,
        payload: {
            resetBtnStatus: status,
        },
    }
}
