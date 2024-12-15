import {ItemTypes} from '../ItemTypes'
import { useDrag, DragPreviewImage } from 'react-dnd'
import {knightImage } from '../knightImage'

const knightStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}

const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.KNIGHT,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [],
  )

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  )
}

export default Knight