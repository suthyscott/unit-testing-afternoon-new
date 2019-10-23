import React from 'react';
import {render, act} from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import {MemoryRouter} from 'react-router-dom';
import {shortenText} from '../utils/functions';
import {posts} from './_data_/testData';

var longPost = posts[0]
var post = posts[1]

it('Renders out a post', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(post.text)
})

it('Shortens display text when expanded is false', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('Displays all text when expanded is true', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    )

    expect(container.textContent).toContain(longPost.text)
})