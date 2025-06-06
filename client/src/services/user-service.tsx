import { AxiosResponse } from 'axios'
import { axiosClient } from '~/plugins/axiosClient'
import { URLs } from '~/constants/request'
import { createUrlPath } from '~/utils/helper-functions'
import {
  GetUsersParams,
  UpdateUserParams,
  UserResponse,
  UserRole,
  UpdateUserLanguageParams
} from '~/types'

export const userService = {
  getUsers: async (
    params: GetUsersParams
  ): Promise<AxiosResponse<UserResponse[]>> => {
    return await axiosClient.get(URLs.users.get, { params })
  },
  getUserById: (
    userId: string,
    userRole: UserRole
  ): Promise<AxiosResponse<UserResponse>> => {
    return axiosClient.get(
      createUrlPath(URLs.users.get, userId, { role: userRole })
    )
  },
  updateUser: (
    userId: string,
    userRole: UserRole,
    params: UpdateUserParams
  ): Promise<AxiosResponse<null>> => {
    return axiosClient.patch(
      createUrlPath(URLs.users.update, userId, { role: userRole }),
      params
    )
  },
  deleteUser: (userId: string): Promise<AxiosResponse<null>> => {
    return axiosClient.delete(createUrlPath(URLs.users.get, userId))
  },
  deleteUsers: (userIds: string): Promise<AxiosResponse<null>> => {
    return axiosClient.post(URLs.users.delete, userIds)
  },
  updateUserLanguage: (
    userId: string,
    userRole: UserRole,
    params: UpdateUserLanguageParams
  ): Promise<AxiosResponse<null>> => {
    return axiosClient.patch(
      createUrlPath(URLs.users.update, userId, { role: userRole }),
      params
    )
  }
}
