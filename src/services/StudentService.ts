import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { StudentItem} from '@/type'
import apiClient from './AxiosClient'

export default {
  getStudents(perPage: number, page: number): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>('/students?_page=' + page + '&_limit=' + perPage)
  },
  getStudentById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>('/students/' + id.toString())
  }
}
