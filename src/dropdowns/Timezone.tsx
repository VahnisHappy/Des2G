import TimezoneSelect, {ITimezone} from "react-timezone-select";
import * as React from "react";
import {useState} from "react";
import '../styles/TimezoneSelect.css'

export const Timezone = () => {
    const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )

    return(
        <TimezoneSelect
            className="timezoneSelect-container"
            value={selectedTimezone}
            onChange={setSelectedTimezone}
        />
    )
}
