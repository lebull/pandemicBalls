import React from 'react';
import './App.scss';
// import { FullPageList } from './components/layout/FullPageList';
import { StackList } from './components/layout/StackList/StackList';
import { TopBar } from './components/utility/TopBar/TopBar';

const App = () => {
    return (
        <div data-testid="timeline">
            <TopBar />
            <StackList/>
        </div>
    );
}
export default App;