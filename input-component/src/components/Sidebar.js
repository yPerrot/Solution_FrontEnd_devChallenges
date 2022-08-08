/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = () => {
    return (
        <nav className="sidebar">
            <header><span>Dev</span>Challenges.io</header>

            <div className="sidebar__pages">
                <a href="#" className="sidebar__pages__label">Colors</a>
                <a href="#" className="sidebar__pages__label">Typography</a>
                <a href="#" className="sidebar__pages__label">Spaces</a>
                <a href="#" className="sidebar__pages__label">Buttons</a>
                <a href="#" className="sidebar__pages__label label_activate">Inputs</a>
                <a href="#" className="sidebar__pages__label">Grid</a>
            </div>
        </nav>
    )
}

export default Sidebar;
