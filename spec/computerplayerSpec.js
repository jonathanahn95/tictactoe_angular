const ComputerPlayer = require('../computerplayer')

describe('the ComputerPlayer class - ', () => {
    beforeEach(function() { 
        cp = new ComputerPlayer('O')
    })
    describe('the constructor', () => {
        it('initializes with name', () => {
            expect(cp.name).toBe('O')
        });
    });
});