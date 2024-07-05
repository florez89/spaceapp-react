import styled from "styled-components"
import ItemNavegacion from "../ItemNavegacion"

const ListaEstilizada = styled.ul`
    margin: 0; 
    padding: 0;
    list-style: none;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion
                        iconoActivo="img/iconos/home-activo.png"
                        iconoInactivo="img/iconos/home-inactivo.png"
                        activo={true}
                    >
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="img/iconos/mas-vistas-activo.png"
                        iconoInactivo="img/iconos/mas-vistas-inactivo.png"
                    >
                        Más vistas
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="img/iconos/me-gusta-activo.png"
                        iconoInactivo="img/iconos/me-gusta-inactivo.png"
                    >
                        Más Me Gusta
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="img/iconos/nuevas-activo.png"
                        iconoInactivo="img/iconos/nuevas-inactivo.png"
                    >
                        Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion
                        iconoActivo="img/iconos/sorprendeme-activo.png"
                        iconoInactivo="img/iconos/sorprendeme-inactivo.png"
                    >
                        Sorpréndeme
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>

        </aside>)
}

export default BarraLateral