import { Offer, UserResponse, UserRoleEnum } from '~/types'

export interface ItemsWithCount<T> {
  count: number
  items: T[]
}

export interface CategorySubjectStepper<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface CommonEntityFields {
  _id: string
  createdAt: string
  updatedAt: string
}

export interface CategoryAppearance {
  icon: string
  color: string
}

export interface DataByRole<T> {
  [UserRoleEnum.Student]: T
  [UserRoleEnum.Tutor]: T
}

export interface CategoryInterface {
  _id: string
  name: string
  appearance: CategoryAppearance
  totalOffers: DataByRole<number>
  createdAt: string
  updatedAt: string
}

export interface PopularCategoryInterface {
  _id: string
  name: string
  appearance: { icon: string; color: string }
  totalOffers: number
}

export interface CategoryNameInterface {
  _id: string
  name: string
}

export interface SubjectApiResponse {
  data: {
    _id: string
    name: string
    category: {
      _id: string
      name: string
      appearance: CategoryAppearance
    }
    totalOffers: { student: number; tutor: number }
  }[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface SubjectsInterfaceWithIcon {
  _id: string
  name: string
  icon: React.ElementType
  appearance: CategoryAppearance
  description?: string
  link?: string
  totalOffers: { [key: string]: number }
}

export interface SubjectInterface {
  _id: string
  name: string
  category: string
  totalOffers: DataByRole<number>
  createdAt: string
  updatedAt: string
}

export interface SubjectParams {
  limit?: number
  categoryId?: string
}

export interface SubjectNameInterface {
  _id: string
  name: string
  category?: {
    _id: string
    name: string
  }
}

export interface SubjectNameStepperInterface {
  _id: string
  name: string
  category: string
  totalOffers?: {
    student: number
    tutor: number
  }
  createdAt?: string
  updatedAt?: string
}

export interface SubjectsNamesResponse {
  data: SubjectNameInterface[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface ReviewInterface {
  offer: Offer
  author: UserResponse
  comment: string
  rating: number
  createdAt: string
}

export interface Faq {
  _id?: string
  question: string
  answer: string
}

export interface OutletContext {
  pageRef: React.RefObject<HTMLDivElement> | null
}

export interface Breakpoints {
  isDesktop: boolean
  isLaptopAndAbove: boolean
  isLaptop: boolean
  isTablet: boolean
  isMobile: boolean
}

export interface RouteItem {
  route: string
  path: string
}

export interface AddDocuments {
  maxFileSize: number
  maxAllFilesSize: number
  filesTypes: string[]
  fileSizeError: string
  allFilesSizeError: string
  typeError: string
  maxQuantityFiles: number
}

export interface Media {
  name: string
  path: string
}

export interface File extends CommonEntityFields {
  name: string
  size: number
  url: string
}

export interface Link {
  _id: string
  name: string
  url: string
}
