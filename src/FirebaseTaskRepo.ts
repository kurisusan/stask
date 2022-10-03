import { TaskData } from "./List/Task";
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { TaskRepo } from "./List";
import { firebaseConfig } from "./firebaseConfig";


export class FirebaseTaskRepo implements TaskRepo {
    firebase: Firestore
    constructor() {
        const app = initializeApp(firebaseConfig);
        const firestore = getFirestore(app);
    }
    public get(): Promise<TaskData>[] {
        throw Error('TODO: implement')
    }
    public write(taskId: string, data: TaskData): Promise<void> {
        throw Error('TODO: implement')
    }
}