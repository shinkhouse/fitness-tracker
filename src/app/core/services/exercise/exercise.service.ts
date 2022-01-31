import { Injectable } from '@angular/core';
import { Subject, Subscription, take } from 'rxjs';
import { Exercise } from '../../models/exercise.model';
import { map, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UIService } from '../ui/ui.service';
import { Store } from '@ngrx/store';
import * as fromTraining from '../../../pages/training/training.reducer';
import * as UI from '../ui/ui.actions';
import * as Training from '../../../pages/training/training.actions';
@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    exerciseChanged: Subject<Exercise> = new Subject<Exercise>();
    exercisesChanged: Subject<Exercise[]> = new Subject<Exercise[]>();
    finishedExercisesChanged: Subject<Exercise[]> = new Subject<Exercise[]>();
    private availableExercisesCollection: AngularFirestoreCollection;
    public exercise: Exercise;
    public collectionRef: any;
    private fbSubs: Subscription[] = [];

    constructor(private afs: AngularFirestore, private uiService: UIService, private store: Store<fromTraining.State>) {}

    fetchAvailableExercises() {
        this.availableExercisesCollection = this.afs.collection('availableExercises');
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push(
            this.availableExercisesCollection
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
                .subscribe(
                    (exercises: Exercise[]) => {
                        this.store.dispatch(new UI.StopLoading());
                        this.store.dispatch(new Training.SetAvailableTrainings(exercises));
                    },
                    (error) => {
                        this.store.dispatch(new UI.StopLoading());
                        this.uiService.showSnackbar('Could not fetch exercise options', null, 4000);
                    }
                )
        );
    }

    fetchPastExercises() {
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push(
            this.afs
                .collection('finishedExercises')
                .valueChanges()
                .subscribe(
                    (exercises: Exercise[]) => {
                        this.store.dispatch(new Training.SetFinishedTrainings(exercises));
                        this.store.dispatch(new UI.StopLoading());
                    },
                    (error) => {
                        this.store.dispatch(new UI.StopLoading());
                        this.uiService.showSnackbar('Could not fetch past exercises', null, 4000);
                    }
                )
        );
    }

    startExercise(selectedId: string) {
        this.store.dispatch(new Training.StartTraining(selectedId));
    }

    completeExercise() {
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe((exercise: Exercise) => {
            this.addDataToFirestore({ ...exercise, date: new Date(), state: 'completed' });
            this.store.dispatch(new Training.StopTraining());
        })
    }

    cancelExercise(progress: number) {
        this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe((exercise: Exercise) => {
            this.addDataToFirestore({
                ...exercise,
                duration: exercise.duration * (progress / 100),
                calories: exercise.duration * (progress / 100),
                date: new Date(),
                state: 'cancelled',
            });
            this.store.dispatch(new Training.StopTraining());
        });
        
    }

    cancelSubscriptions() {
        this.fbSubs.forEach((sub) => sub.unsubscribe());
    }

    private addDataToFirestore(exercise) {
        this.afs.collection('finishedExercises').add(exercise);
    }
}
