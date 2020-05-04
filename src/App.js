import React from 'react';
import './App.scss';
import { FullPageList } from './components/layout/FullPageList'

const App = () => {
    return (
        <div data-testid="timeline">
            <FullPageList/>
        </div>
    );
}
export default App;