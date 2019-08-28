import { Component } from "@angular/core";

@Component({
  selector: "events-thumbnail",
  template: `
    <div>
      <h1>Event list component</h1>
      <hr />

      <h2>{{ event.name }}</h2>
    </div>
  `
})
export class EventThumbnailComponent {}
