import { TestBed } from '@angular/core/testing';

import { RosterService } from './roster.service';

describe('RosterService', () => {
  let service: RosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosterService);
  });

  describe('getContestants', () => {
    it('return contestants array', () => {
      expect(service.getContestants()).toEqual([])
    })
  })

  describe('addContestant', () => {
    
    it('should not allow null names', () => {
      let result = service.addContestant(null);
      expect(result).toBeFalse;
    });
        
    it('should not allow empty string names', () => {
      let result = service.addContestant('');
      expect(result).toBeFalse;
    });

    it('should not allow duplicate names', () => {
      service.addContestant('Anorak');
      let result = service.addContestant('Anorak');
      expect(result).toBeFalse;
    });

    it('should add one contestant', () => {
      expect(service.getContestants().length).toEqual(0);

      service.addContestant('Anorak')
      expect(service.getContestants()[0]).toEqual('Anorak');
      expect(service.getContestants().length).toEqual(1);
    });

    it('should add several contestants', () => {
      expect(service.getContestants().length).toEqual(0)

      service.addContestant('Anorak');
      service.addContestant('Parzival');
      service.addContestant('Ach');
  
      expect(service.getContestants()[0]).toEqual('Anorak');
      expect(service.getContestants()[1]).toEqual('Parzival');
      expect(service.getContestants()[2]).toEqual('Ach');
      expect(service.getContestants().length).toEqual(3)
    
    });
  });
});