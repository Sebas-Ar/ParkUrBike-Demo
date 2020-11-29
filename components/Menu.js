
const Menu = ({toogleProfile}) => {
    return (
        <div className="container">

            <img onClick={() => toogleProfile()} src="/img/icons/address-card-regular.svg"/>
            <img src="/img/icons/comments-regular.svg"/>
            <img src="/img/icons/map-marked-alt-solid.svg"/>
            <img src="/img/icons/search-location-solid.svg"/>
            <img src="/img/icons/book-solid.svg"/>

            <style jsx>{`

                .container {
                    position: absolute;
                    width: 100%;
                    height: 60px;
                    background: var(--blue);
                    border-radius: 20px 20px 0px 0px;
                    top: 580px;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                    align-items: center;
                    justify-items: center;
                }

                img {
                    transition: transform .5s;
                    cursor: pointer;
                }

                img:hover {
                    transform: scale(1.2)
                }
            
            `}</style>

        </div>
    )
}

export default Menu
