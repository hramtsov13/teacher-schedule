import { reactive } from 'vue'

export type IStudent = {
  id: number
  personalInfo: { name: string; lastName: string }
  lessons?: ILesson[] | null
}

export interface ILesson {
  date: string
  teacher: string
}

export const students = reactive<IStudent[]>([
  {
    id: 1,
    personalInfo: { name: 'Максим', lastName: 'Петров' },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 2,
    personalInfo: { name: 'Иван', lastName: 'Попов' },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 3,
    personalInfo: { name: 'Дмитрий', lastName: 'Лодырев' },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 4,
    personalInfo: { name: 'Алексей', lastName: 'Прогульщиков' },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  }
])
