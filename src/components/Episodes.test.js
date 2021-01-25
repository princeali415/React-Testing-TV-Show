import React from 'react';
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Episodes from "./Episodes.js";

const episodes = [
    {
        name: 'episode 0',
        id: 0,
    },
    {
        name: 'episode 1',
        id: 1,
    },
    {
        name: 'episode 2',
        id: 2,
    },
    {
        name: 'episode 3',
        id: 3,
    },
    {
        name: 'episode 4',
        id: 4,
    }
]


test("Episodes component renders without errors", () => {
    render(<Episodes episodes={[]}/>);
});

test("Renders change in Episodes list correctly", () => {
    const { rerender } =  render(<Episodes episodes={[]} />);
    
    let episodesObj = screen.queryAllByTestId('episodes');
    expect(episodesObj).toStrictEqual([]);
    expect(episodesObj).toHaveLength(0);

    rerender(<Episodes episodes={episodes} />)
    episodesObj = screen.queryAllByTestId('episodes');
    expect(episodesObj).toHaveLength(5);
});
