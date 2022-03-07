import { defineStore } from 'pinia'
import { sleep } from '../helpers/utils'
import { students, IStudent } from '../helpers/studentsMocks'
import axios from 'axios'
import { baseURL } from '../plugins/axios'
import { doc, getDoc, collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const request = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${token}`
  }
})

export const useUsersStore = defineStore('main', {
  state: () => ({
    students: <IStudent[]>[],
    testInfo: <unknown>[]
  }),

  actions: {
    async getAllUsers() {
      await sleep(500)
      this.students = students
    },
    async getAxiosInfo() {
      try {
        const res = await request.get('/todos')
        this.testInfo = res
      } catch ({ response, error }) {
        console.log('error: ', error)
      }
    },
    async getAllStudents() {
      const studentsCollection = collection(db, 'students')
      const studentsSnapshot = await getDocs(studentsCollection)
      const studentsList = studentsSnapshot.docs.map((doc) => doc.data()) as IStudent[]
      this.students = studentsList
    },

    async addStudent(newStudent: IStudent) {
      try {
        const docRef = await addDoc(collection(db, 'students'), newStudent)
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
  }
})
