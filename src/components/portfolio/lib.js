import React from 'react';
import text from './mystudy.json'

export const master=(
    <div>
            <h4>
                Charles Sturt Univeristy, Sydney, Australia
            </h4>
            {text.master}
    </div>

)

export const bachelor=(
    <div>
    <h4>
        Kathmandu Engineering College, (Tribhuvan University), Kathmandu, Nepal
    </h4>
    {text.bachelor}
    </div>
)

export const highschool=(
    <div>
            <h4>
                National School of Sciences, Kathmandu, Nepal
            </h4>
            {text.highschool}

    </div>

)

export const trainingA=(
    <div>
    <h4>
        Mobile for Development    
    </h4>
    {text.trainingA}

    </div>
)
export const trainingB=(
    <div>
    <h4>
        Java Programming Certificates
    
    </h4>
    {text.trainingB}

    </div>
)
export const trainingC=(
    <h3>
        {text.trainingC}
    
    </h3>
)

export const workA=(
    <div>
        <h4> QR Ticketing System</h4>
            <p>
                {text.workA}
            </p>
                <dl>
                <dt>Platform and Languages:</dt>
                <dd>Android, PHP, JAVA, JSP, JavaScript, CSS, Wamp Server, QR code</dd>
            </dl>
    </div>
)

export const workB=(
    <div>
    <h4>
        Mobile Application - Outfit Diary
    </h4>
    <p>
      {text.workB}
    </p>

      <dl>
                <dt>Platform and Languages:</dt>
                <dd>Android, Firebase as Backend Service, Google map API</dd>
            </dl>
      </div>
)
export const workC=(
    <h3>
        {text.workC}
    </h3>
)
export const workD=(
    <h3>
        {text.workD}
    </h3>
)