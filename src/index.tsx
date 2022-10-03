import { render } from 'preact';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FirebaseTaskRepo } from './FirebaseTaskRepo';
import { List } from './List';

// Init react-query cache
const queryClient = new QueryClient()

// Init firebase as the task repo
// Can easily be replaced by implementing the TaskRepo interface
const repo = new FirebaseTaskRepo()

render((
    <QueryClientProvider client={queryClient}>
        <List
            repo={repo}
            // tasks={[{
            //     title: 'Create a stack of tasks',
            //     description: 'Create an application to stack tasks',
            //     creation: new Date(),
            // }, {
            //     title: 'Boring task',
            //     creation: new Date(),
            // }]}
        />
    </QueryClientProvider>
), document.body);