import { useMemo } from 'react'
import { Board } from './components/Board.jsx'
import { Game } from './components/Game.jsx'

const containerStyle = {
  width: 500,
  height: 500,
  border: '1px solid gray',
}
/**
 * The Chessboard Tutorial Application
 */
export const TutorialApp = () => {
  const game = useMemo(() => new Game(), [])
  return (
    <div style={containerStyle}>
      <Board game={game} />
    </div>
  )
}
