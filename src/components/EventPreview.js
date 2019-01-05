import React from 'react';

const EventPreview = (eventX) => (
    <div className="EventPreview">
        <div>
            {eventX.name}
        </div>
        <div>
            {eventX.date}
        </div>
    </div>
);

export default EventPreview;
