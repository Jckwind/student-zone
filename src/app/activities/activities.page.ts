import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../_services/firebase.service';
import { Activity_Category } from '../_models/Activity_Category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit, OnDestroy {

  subscription: Subscription;

  description: String = ""

  categories: Activity_Category[] = []

  constructor(private firebase: FirebaseService) { 
    // firebase.get_categories(firebase.activity_categories_names);
  }
  

  ngOnInit() {
    this.subscription = this.firebase.activity_layout
      .subscribe(layout => {
        if (layout != null) {
          this.description = layout.description;
          this.categories = layout.categories;
        }
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
