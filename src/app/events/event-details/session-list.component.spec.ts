import {SessionListComponent} from './session-list.component';
import {ISession} from '../shared';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockauthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockauthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sesions correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'session 1', level: 'intermediate'},
        {name: 'session 2', level: 'intermediate'},
        {name: 'session 3', level: 'beginner'},
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions.length).toBe(2);
    });
  });

  describe('ngOnChanges', () => {
    it('should sort the sesions correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'session 1', level: 'intermediate'},
        {name: 'session 3', level: 'intermediate'},
        {name: 'session 2', level: 'beginner'},
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();
      expect(component.visibleSessions[2].name).toBe('session 3');
    });
  });
});
