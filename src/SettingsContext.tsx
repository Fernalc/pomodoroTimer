import react from 'react'

interface ISettingsInfo {
  showSettings: boolean,
  setShowSettings?: (value: boolean) => void
  workMinutes: number;
  breakMinutes: number;
  setWorkMinutes?: (value: number) => void
  setBreakMinutes?: (value: number) => void
}

const defaultState = {
  showSettings: true,
  workMinutes: 45,
  breakMinutes: 15
};

const SettingsContext = react.createContext<ISettingsInfo>(defaultState);

export default SettingsContext