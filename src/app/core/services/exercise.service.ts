import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Exercise } from '../models/exercise.model';
import { map, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    exerciseChanged: Subject<Exercise> = new Subject<Exercise>();
    exercisesChanged: Subject<Exercise[]> = new Subject<Exercise[]>();
    finishedExercisesChanged: Subject<Exercise[]> = new Subject<Exercise[]>();
    private availableExercises: Exercise[] = [];
    private runningExercise!: Exercise;
    private availableExercisesCollection: AngularFirestoreCollection;
    public exercise: Exercise;
    public collectionRef: any;
    private fbSubs: Subscription[] = [];

    constructor(private afs: AngularFirestore) {}

    fetchAvailableExercises() {
        this.availableExercisesCollection = this.afs.collection('availableExercises');
        this.fbSubs.push(this.availableExercisesCollection
            .snapshotChanges()
            .pipe(
                map((actions) =>
                    actions.map((a) => {
                        const data = a.payload.doc.data() as Exercise;
                        const id = a.payload.doc.id;
                        console.log({ id, ...data });
                        return { id, ...data };
                    })
                )
            )
            .subscribe((exercises: Exercise[]) => {
                this.availableExercises = exercises;
                this.exercisesChanged.next([...this.availableExercises]);
            }, error => {

            }));
    }

    fetchPastExercises(){
        this.fbSubs.push(this.afs.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
            this.finishedExercisesChanged.next(exercises);
        }, error => {

        }));
    }

    startExercise(selectedId: string) {
        const selectedExercise = this.availableExercises.find((exercise) => {
            return exercise.id === selectedId;
        });

        this.runningExercise = selectedExercise;
        this.exerciseChanged.next({ ...this.runningExercise });
    }

    completeExercise() {
        this.addDataToFirestore({ ...this.runningExercise, date: new Date(), state: 'completed' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    cancelExercise(progress: number) {
        this.addDataToFirestore({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress / 100),
            calories: this.runningExercise.duration * (progress / 100),
            date: new Date().toISOString(),
            state: 'cancelled',
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }

    getRunningExercise(): Exercise {
        return { ...this.runningExercise };
    }

    cancelSubscriptions() {
        this.fbSubs.forEach((sub) => sub.unsubscribe());
    }

    private addDataToFirestore(exercise) {
        this.afs.collection('finishedExercises').add(exercise);
    }
}
