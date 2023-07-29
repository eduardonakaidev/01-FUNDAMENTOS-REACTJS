import  styles  from './Sidebar.module.css'

export  function  Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img style={styles.cover} src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

            <div className={styles.profile}>
                <img src="" alt="" />
                <strong>
                    Eduardo Nakai
                </strong>
                <span>
                    Web Developer
                </span>
            </div>

            <footer>
                <a href='#'>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}