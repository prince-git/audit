angular.module('degrAud.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('auditService', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var courses = [
        { id: 0, title: 'GD1234', description: 'Drawing 101', extra: 'Draw Good', complete: 0, need: 1 },
        { id: 1, title: 'GE0987', description: 'Learning 201', extra: 'Learn Well', complete: 1, need: 0 },
        { id: 2, title: 'GWDA4468', description: 'Design 042', extra: 'Design Stuff', complete: 0, need: 2 },
        { id: 3, title: 'GE3280', description: 'Learnin Better 101', extra: 'Learnin Extra Better', complete: 1, need: 0 }
    ];

    return {
        all: function() {
            return courses;
        },

        get: function(courseId) {
            // Simple index lookup
            return courses[courseId];
        }
    }
});
