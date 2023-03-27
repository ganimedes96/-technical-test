import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from './Home'
import { PostDetails } from './PostDetails'
import { Users } from './Users'



describe('Testing Home', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
                <Home />
                <Users />
            </BrowserRouter>
        )
    })

    it('should contains in Header redirect links', () => {
        const linkHome = screen.getByText('Home')
        expect(linkHome).toBeInTheDocument()
        const linkUsers = screen.getByText('Users')
        expect(linkUsers).toBeInTheDocument()
        linkUsers.click()
        const title = screen.getByText('List Users')
        expect(title).toBeInTheDocument()


    })
    it('should render the posts', async () => {

        const posts = await screen.findAllByTestId(/^post/)
        expect(posts.length).toBe(10)

    })
    it('should render 10 posts by clicking on the pagination button', async () => {

        const button = await screen.findByTestId('btn2')
        button.click()

        const posts = await screen.findAllByTestId(/post/i)
        expect(posts.length).toBe(10)

        const post = await screen.findByTestId('post20')
        expect(post).toBeInTheDocument()
    })
    
})