import React from 'react';
import './App.scss';
import { FullPageList } from './components/layout/FullPageList'

const App = () => {
    return (
        <div data-testId="timeline">
            <FullPageList/>
        </div>
    );
}
export default App;