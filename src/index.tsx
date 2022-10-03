import { render } from 'preact';
import { List } from './List';
import { Task } from './Task';

const mountNode = document.getElementById('app');
render(<>
    <List
        tasks={[
            <Task title='My first task'/>
        ]}
    />
</>, document.body);