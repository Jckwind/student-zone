import { Injectable } from '@angular/core';
import { Firestore, getDoc, doc } from '@angular/fire/firestore';
import { Activity_Category, GenericObject } from '../_models/Activity_Category';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  activity_categories_names = []

  firestore: Firestore;

  activity_layout = new BehaviorSubject<GenericObject>(null);

  activity_layout$ = this.activity_layout.asObservable();

  constructor(private firestore_object: Firestore) {  
    this.firestore = firestore_object
    this.get_layout()
  }

  async get_layout() {
    const activity_layout = doc(this.firestore, 'admin', 'activities_layout')
    const docSnap = await getDoc(activity_layout);

    var result = {};

    var activity_category_layouts: Activity_Category[] = []

    if (docSnap.exists()) {
      const data = docSnap.data();
      for (const key in data) {
        if (data[key].constructor == Object) {
          const category = new Activity_Category(data[key]);
          activity_category_layouts.push(category);
        } else {
          result[key] = data[key]
        }
      }

      result['categories'] = activity_category_layouts;
    } else {
      console.log("No such document!");
    }

    this.activity_layout.next(result);
  }
  
}
