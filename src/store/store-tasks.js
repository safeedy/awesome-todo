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
        }
    },
    search: '',
    sort: 'dueDate'
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
    },
    setSearchMutation(state, value) {
        state.search = value
    },
    setSortByMutation(state, value) {
        state.sort = value
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
    },
    setSearch({ commit }, value) {
        commit('setSearchMutation', value)
    },
    setSortBy({ commit }, value) {
        commit('setSortByMutation', value)
    }
}

const getters =  {
    getTasks: (state) => {
        return state.tasks
    },
    getTasksTodo: (state, getters) => {
        let tasksFiltered = getters.getTasksFiltered
        let tasks = {}
        Object.keys(tasksFiltered).forEach(key => {
            let task = tasksFiltered[key]
            if(!task.completed) {
                tasks[key] = task
            }
        });
        return tasks
    },
    getTasksCompleted: (state, getters) => {
        let tasksFiltered = getters.getTasksFiltered
        let tasks = {}
        Object.keys(tasksFiltered).forEach(key => {
            let task = tasksFiltered[key]
            if(task.completed) {
                tasks[key] = task
            }
        });
        return tasks
    },
    getTasksFiltered: (state, getters) => {
        let tasksSorted = getters.getTasksSorted
        let tasks = {}
        if(!state.search) {
            return tasksSorted
        }
        else {
            Object.keys(tasksSorted).forEach(key => {
                let task = tasksSorted[key]
                if(task.name.toLowerCase().includes(state.search.toLowerCase())) {
                    tasks[key] = task
                }
            });
            return tasks
        }
    },
    getTasksSorted: (state) => {
        let tasksSorted = {},
        keysOrdered = Object.keys(state.tasks)
    
        keysOrdered.sort((a,b) => {
            let taskAProp = state.tasks[a][state.sort].toLowerCase(),
                taskBProp = state.tasks[b][state.sort].toLowerCase()
            if(taskAProp > taskBProp) return 1
            else if(taskAProp < taskBProp) return -1
            else return 0
        })
        keysOrdered.forEach(key => {
            tasksSorted[key] = state.tasks[key]
        })
        return tasksSorted
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}