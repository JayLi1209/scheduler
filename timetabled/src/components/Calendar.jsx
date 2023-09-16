import React from "react";
import Event from "./Event";

function Calendar(){
    return(
        <div className="Calendar">
            <div>
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event="Algo" color="green" location="Science Building"/>
                    <td></td>
                    <Event event="Algo" color="green" location="Science Building"/>
                    <td></td>
                    <Event event="Algo" color="green" location="Science Building"/>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <Event event="Diff Eq" color="blue"/>
                    <td></td>
                    <Event event="Diff Eq" color="blue"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <Event event="Diff Eq" color="blue"/>
                    <td></td>
                    <Event event="Diff Eq" color="blue"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time"> 12 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">1 pm</td>
                    <Event event="Dancing" color="pink"/>
                    <td></td>
                    <Event event="Dancing" color="pink"/>
                    <td></td>
                    <Event event="Dancing" color="pink"/>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">2 pm</td>
                    <Event event="Dancing" color="pink"/>
                    <td></td>
                    <Event event="Dancing" color="pink"/>
                    <td></td>
                    <Event event="Dancing" color="pink"/>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar;