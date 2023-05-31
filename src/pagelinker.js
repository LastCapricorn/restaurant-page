import home from './startpage'
import menu from './menupage'
import contact from './contactpage'
import credits from './creditspage'

const pageIDs = [home, menu, contact, credits]

export default function pagelink(index) {
  return pageIDs[index]
}
