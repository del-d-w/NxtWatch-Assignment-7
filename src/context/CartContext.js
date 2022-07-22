import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})

export default CartContext
