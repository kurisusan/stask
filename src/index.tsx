import { render } from 'preact';
import { List } from './List';

render(<>
    <List
        tasks={[{
            title: 'Create a stack of tasks',
            description: 'Create an application to stack tasks',
            creation: new Date(),
        }, {
            title: 'Boring task',
            creation: new Date(),
        }]}
    />
</>, document.body);