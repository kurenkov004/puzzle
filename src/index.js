import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {ReactDOM, createRoot} from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Example />
            </DndProvider>
        </div>
    )
}

root.render(<App/>)