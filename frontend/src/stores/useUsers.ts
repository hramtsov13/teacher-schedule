import { defineStore } from 'pinia'
import { sleep } from '../helpers/utils'
import { students, IStudent } from '../helpers/studentsMocks'

export const useUsersStore = defineStore('main', {
  state: () => ({
    students: <IStudent[]>[]
  }),

  actions: {
    async getAllUsers() {
      // await sleep(1500)
      this.students = students
    }
  }
})
