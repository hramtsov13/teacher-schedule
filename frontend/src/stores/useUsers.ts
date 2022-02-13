import { defineStore } from 'pinia'
import { sleep } from '../helpers/utils'
import { students, IStudent } from '../helpers/studentsMocks'
import axios from 'axios'
import { baseURL, OAuthToken } from '../plugins/axios'

const request = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OAuthToken}`
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
    },
    async getData() {
      try {
        const googleCalendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID
        const res = await request.get(`users/me/calendarList/${googleCalendarId}`)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
