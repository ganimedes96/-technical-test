import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from './Home'
import { PostDetails } from './PostDetails'
import { Users } from './Users'



describe('Testing Users', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
                <Users />
                <Home />
            </BrowserRouter>
        )
    })

    it('should contains in Header redirect links', () => {
        const linkHome = screen.getByText('Home')
        expect(linkHome).toBeInTheDocument()
        const linkUsers = screen.getByText('Users')
        expect(linkUsers).toBeInTheDocument()
        const titleUsers = screen.getByText('List Users')
        expect(titleUsers).toBeInTheDocument()
        linkHome.click()
        const titleHome = screen.getByText('Hey, Welcome')
        expect(titleHome).toBeInTheDocument()


    })
    it('should render the users', async () => {

        const users = await screen.findAllByTestId(/^user/)
        expect(users.length).toBe(10)

    })
   
})
