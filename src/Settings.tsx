import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import './slider.css'
import SettingsContext from './SettingsContext'
import BackButton from './BackButton'

function Settings() {
  const settingsInfo = useContext(SettingsContext)
  return (
    <div style={{ textAlign: 'left' }}>
      <label >Помидор: {settingsInfo.workMinutes}:00 мин</label>
      <ReactSlider
        className='slider'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes && settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Перерыв: {settingsInfo.breakMinutes}:00 мин</label>
      <ReactSlider
        className='slider green'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes && settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => settingsInfo.setShowSettings && settingsInfo.setShowSettings(false)
        } />
      </div>

    </div>
  )
}

export default Settings