import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <header><span>Dev</span>Challenges.io</header>

            <div className="sidebar__pages">
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" className="sidebar__pages__label">Colors</a>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" className="sidebar__pages__label">Typography</a>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" className="sidebar__pages__label">Spaces</a>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" className="sidebar__pages__label">Buttons</a>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" className="sidebar__pages__label label_activate">Inputs</a>
                { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                <a href="#" className="sidebar__pages__label">Grid</a>
            </div>
        </nav>
    )
}

export default Sidebar;