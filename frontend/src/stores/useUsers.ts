import { defineStore } from 'pinia'
import { sleep } from '../helpers/utils'
import { students, IStudent } from '../helpers/studentsMocks'
import axios from 'axios'
import { baseURL } from '../plugins/axios'

const request = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${token}`
  }
})

export const useUsersStore = defineStore('main', {
  state: () => ({
    students: <IStudent[]>[]
    // testInfo: <unknown>[]
  }),

  actions: {
    async getAllUsers() {
      await sleep(500)
      this.students = students
    }
    // async getAxiosInfo() {
    //   try {
    //     const res = await request.get('/')
    //     this.testInfo = res
    //   } catch ({ response, error }) {
    //     console.log('error: ', error)
    //   }
    // }
  }
})
