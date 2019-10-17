import { uid } from 'quasar'
import Vue from 'vue'

const state = {
    tasks: {
        'ID1': {
            name: 'Go to shop',
            completed: false,
            dueDate: '2019/05/12',
            dueTime: '16:40'
        },
        'ID2': {
            name: 'Get bananas',
            completed: false,
            dueDate: '2019/05/13',
            dueTime: '16:30'
        },
        'ID3': {
            name: 'Get apples',
            completed: false,
            dueDate: '2019/05/14',
            dueTime: '16:50'
        },
    }
}

const mutations =  {
    updateTaskMutation(state, payload) {
        console.log(payload)
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTaskMutation(state, id) {
        console.log(id)
        Vue.delete(state.tasks, id)
    },
    addTaskMutation(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTaskMutation', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTaskMutation', id)
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task
        }
        commit('addTaskMutation', payload)
    }
}

const getters =  {
    getTasks: (state) => {
        return state.tasks
    },
    getTasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key]
            if(!task.completed) {
                tasks[key] = task
            }
        });
        return tasks
    },
    getTasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(key => {
            let task = state.tasks[key]
            if(task.completed) {
                tasks[key] = task
            }
        });
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}