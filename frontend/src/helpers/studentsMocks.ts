import { reactive } from 'vue'

export type IStudent = {
  id: number
  personalInfo: IStudentPersonalInfo
  lessons?: ILesson[] | null
}

export interface IStudentPersonalInfo {
  name: string
  lastName: string
  phone?: string
  city?: string
  email?: string
  languageLevel?: string
  comment?: string | undefined
}

export interface ILesson {
  date: string
  teacher: string
}

export const students = reactive<IStudent[]>([
  {
    id: 1,
    personalInfo: {
      name: 'Максим',
      lastName: 'Петров',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate',
      comment: 'Лодырь!'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 2,
    personalInfo: {
      name: 'Иван',
      lastName: 'Попов',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 3,
    personalInfo: {
      name: 'Дмитрий',
      lastName: 'Лодырев',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 4,
    personalInfo: {
      name: 'Алексей',
      lastName: 'Прогульщиков',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 5,
    personalInfo: {
      name: 'Максим',
      lastName: 'Петров',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate',
      comment: 'Лодырь!'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 6,
    personalInfo: {
      name: 'Иван',
      lastName: 'Попов',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 7,
    personalInfo: {
      name: 'Дмитрий',
      lastName: 'Лодырев',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 8,
    personalInfo: {
      name: 'Алексей',
      lastName: 'Прогульщиков',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 9,
    personalInfo: {
      name: 'Максим',
      lastName: 'Петров',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate',
      comment: 'Лодырь!'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 10,
    personalInfo: {
      name: 'Иван',
      lastName: 'Попов',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 11,
    personalInfo: {
      name: 'Дмитрий',
      lastName: 'Лодырев',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 12,
    personalInfo: {
      name: 'Алексей',
      lastName: 'Прогульщиков',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 13,
    personalInfo: {
      name: 'Максим',
      lastName: 'Петров',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate',
      comment: 'Лодырь!'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 14,
    personalInfo: {
      name: 'Иван',
      lastName: 'Попов',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 15,
    personalInfo: {
      name: 'Дмитрий',
      lastName: 'Лодырев',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  },
  {
    id: 16,
    personalInfo: {
      name: 'Алексей',
      lastName: 'Прогульщиков',
      phone: '79998887755',
      city: 'Санкт-Петербург',
      email: 'maxim@mail.ru',
      languageLevel: 'Intermediate'
    },
    lessons: [{ date: new Date().toLocaleDateString(), teacher: 'Анна Сладких' }]
  }
])
