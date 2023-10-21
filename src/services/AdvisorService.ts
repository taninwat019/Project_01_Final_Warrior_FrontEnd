import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Advisor } from '@/type';
import apiClient from './AxiosClient'

export default {
  addAdvisor(advisor: Advisor): Promise<AxiosResponse<void>> {
    return apiClient.post<void>('/advisors', advisor);
  },
  updateAdvisor(id: string, newData: Partial<Advisor>): Promise<AxiosResponse<void>> {
    return apiClient.put<void>(`/advisors/${id}`, newData);
  },
  getAdvisors(perPage: number, page: number): Promise<AxiosResponse<Advisor[]>> {
    return apiClient.get<Advisor[]>('/advisors?_limit=' + perPage + '&_page=' + page)
  },
  getAdvisorById(id: number): Promise<AxiosResponse<Advisor>>{
    return apiClient.get<Advisor>('/advisors/' + id.toString())
}
};