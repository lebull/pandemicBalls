import React from 'react';
import './App.scss';
// import { FullPageList } from './components/layout/FullPageList';
import { StackList } from './components/layout/StackList/StackList';

const App = () => {
    return (
        <div data-testid="timeline">
            <StackList/>
        </div>
    );
}
export default App;