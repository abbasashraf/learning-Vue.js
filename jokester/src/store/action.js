



import * as types from './mutation-types';


export const initJokes = ({ commit }) => {
    const url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(json => commit(types.INIT_JOKES, json))
}

export const addJoke = ({ commit }) => {
    const url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(json => commit(types.ADD_JOKE, json))
}


export const removeJoke = ({ commit }, index) => {
    commit(types.REMOVE_JOKE, index)
}

