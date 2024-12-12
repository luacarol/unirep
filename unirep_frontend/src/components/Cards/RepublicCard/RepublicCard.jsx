const RepublicCard = () => {
    return (
        <div className="card_container">

            <div className="image_section">
                <img className="republic_image" />
            </div>

            <div className="information_section">
                <div className="value_section">
                    <h3>R$ 400,00</h3>
                </div>

                <div className="textual-information_section">
                    <div className="name_section">
                        <h2>Freud's Republic</h2>
                    </div>

                    <div className="description_section">
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h4>
                    </div>
                </div>

                <div className="chips_section">
                    {/* TODO: put here the "Chip" component  */}
                </div>

                <div className="heart-button_section">
                    {/* TODO: put here the "IconButton" component  */}
                </div>
            </div>

        </div>
    )
}

export default RepublicCard;