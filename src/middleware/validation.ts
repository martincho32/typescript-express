import { Weather, Visibility } from '../types'

const validateComment = (commentFromRequest: any): void => {
  if (!isString(commentFromRequest)) {
    throw new Error('Inconrrectir missing comment')
  }
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const validateDate = (dateFromRequest: any): void => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const validateWeather = (weatherFromRequest: any): void => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const validateVisibility = (visibilityFromRequest: any): void => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
}

const validateDiaryEntry = (object: any): void => {
  validateComment(object.comment)
  validateDate(object.date)
  validateWeather(object.weather)
  validateVisibility(object.visibility)
}

export default validateDiaryEntry
