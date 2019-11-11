import { uid } from 'quasar'
import Vue from 'vue'
import { firebaseDb, firebaseAuth } from 'boot/firebase'

const state = {
    tasks: {
        /* 'ID1': {
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
        } */
    },
    search: '',
    sort: 'name'
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
    updateTask({ dispatch }, payload) {
        dispatch('fbUpdateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTaskMutation', id)
    },
    addTask({ dispatch }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task
        }
        dispatch('fbAddTask', payload)
    },
    setSearch({ commit }, value) {
        commit('setSearchMutation', value)
    },
    setSortBy({ commit }, value) {
        commit('setSortByMutation', value)
    },
    fbReadData({ commit }) {
        console.log("start reading data from firebase")
        let userId = firebaseAuth.currentUser.uid
        let userTasks = firebaseDb.ref('tasks/'+userId)

        // child added : fired on add and first connection to firebase
        userTasks.on('child_added', snapshot => {
            let task = snapshot.val()
            console.log(task)
            let payload = {
                id: snapshot.key,
                task
            }
            commit('addTaskMutation', payload)
        })

        // child changed
        userTasks.on('child_changed', snapshot => {
            let task = snapshot.val()
            console.log(task)
            let payload = {
                id: snapshot.key,
                updates: task
            }
            commit('updateTaskMutation', payload)
        })

        // child removed
        userTasks.on('child_removed', snapshot => {
            let taskId = snapshot.key
            commit('deleteTaskMutation', taskId)
        })
    },
    fbAddTask({}, payload) {
        console.log('fb addtask payload', payload)
        let userId = firebaseAuth.currentUser.uid
        let taskRef = firebaseDb.ref('tasks/'+userId+'/'+payload.id)
        taskRef.set(payload.task)
    },
    fbUpdateTask({}, payload) {
        console.log('fb updatetask payload', payload)
        let userId = firebaseAuth.currentUser.uid
        let taskRef = firebaseDb.ref('tasks/'+userId+'/'+payload.id)
        taskRef.update(payload.updates)
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