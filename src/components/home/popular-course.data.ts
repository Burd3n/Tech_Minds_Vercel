import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/python_logo.png',
    info: '/images/courses/popup/python.jpg',
    title: 'Python',
    format: 'online/ physical',
    sessionPrice: 25,
    coursePrice: 100,
    category: 'Intermediate',
  },
  {
    id: 2,
    cover: '/images/courses/Scratch.png',
    title: 'Scratch',
    info: '/images/courses/popup/scratch.jpg',
    format: 'online',
    sessionPrice: 20,
    coursePrice: 110,
    category: 'Beginner',
  },
  {
    id: 3,
    cover: '/images/courses/scratchjr_adjusted.png',
    title: 'Scratch Jr',
    info: '/images/courses/popup/scratchjr.jpg',
    format: 'online',
    sessionPrice: 30,
    coursePrice: 120,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',
    title: 'Project Consultation',
    info: '/images/courses/popup/consult.jpg',
    format: 'online/ physical',
    sessionPrice: 30,
    coursePrice: 130,
    category: 'Intermediate',
  },
]
