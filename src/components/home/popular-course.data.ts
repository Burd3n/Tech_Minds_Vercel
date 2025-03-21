import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    title: 'Python',
    format: 'online/ physical',
    sessionPrice: 25,
    coursePrice: 100,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',
    title: 'Scratch',
    format: 'online',
    sessionPrice: 20,
    coursePrice: 110,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'Scratch Jr',
    format: 'online',
    sessionPrice: 30,
    coursePrice: 120,
    category: 'Beginner',
  },
  {
    id: 4,
    cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',
    title: 'Project Consultation',
    format: 'online/ physical',
    sessionPrice: 30,
    coursePrice: 130,
    category: 'Intermediate',
  },
]
