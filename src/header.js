import React, { Component } from 'react'

const user = {
    name: 'kosala',
    lastname: 'mudalige',
    age: 16
}

class Header extends Component {
    render() {
        return (
            <header>
                <div>Logo</div>
                <input type='text' />
            </header >
        )
    }
}

export default Header