export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';

const getKTMDataSuccess = (data) => {
    if (data) {
        return {
            type: GET_DATA,
            data: data
        }
    }
}

const getKTMDataFailure = (data) => {
    if (data) {
        return {
            type: 'GET_KTM_API_ERROR',
            data: data
        }
    }
}

export const getKTMData = (startDate, endDate) => {
    let url = '/ktm';
    if (startDate && endDate) {
        url += '?startDate=' + new Date(startDate + ' 00:00:00').toISOString() + '&endDate=' + new Date(endDate + ' 23:59:59').toISOString()
    }
    return {
        type: 'API',
        payload: {
            url: url,
            method: "GET",
            data: null,
            onSuccess: getKTMDataSuccess,
            label: true,
            onFailure: getKTMDataFailure
        }
    };
}

const setKTMDataSuccess = (data) => {
    if (data) {
        return {
            type: SET_DATA,
            data: data
        }
    }
}

const setKTMDataFailure = (data) => {
    if (data) {
        return {
            type: 'SET_KTM_API_ERROR',
            data: data
        }
    }
}

export const setKTMData = () => {
    return {
        type: 'API',
        payload: {
            url: '/ktm',
            method: "POST",
            data: null,
            onSuccess: setKTMDataSuccess,
            label: true,
            onFailure: setKTMDataFailure
        }
    };
}
