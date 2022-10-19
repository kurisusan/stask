import { TaskData } from '../List/Task'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, CollectionReference, DocumentData, getFirestore } from 'firebase/firestore'
import { TaskRepo } from '../List/List'
import { firebaseConfig } from '../firebaseConfig'

interface TaskDoc {
  title: string
  description?: string
}

export class FirebaseTaskRepo implements TaskRepo {
  private readonly taskCollection: CollectionReference<DocumentData>
  constructor () {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    this.taskCollection = collection(db, 'task')
  }

  public async get (): Promise<TaskData[]> {
    // TODO: implement get
    return [{
      id: '0',
      title: 'Create a stack of tasks',
      description: 'Create an application to stack tasks',
      creation: new Date(),
    }, {
      id: '1',
      title: 'Boring task',
      creation: new Date(),
    }]
  }

  public async update (taskId: string, data: TaskDoc): Promise<void> {

  }

  public async create (data: TaskDoc): Promise<void> {
    await addDoc(this.taskCollection, {
      title: data.title,
      description: data.description,
    })
  }

  public async delete (taskId: string): Promise<void> {

  }
}
