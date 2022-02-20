import '../styles/TopCards.scss';

function TopCards() {

    function dismissCard(event) {
        event.target.className = 'top-card dismissed';
    }

    return (
        <div className="top-cards-container">
            <div className="top-card" onClick={dismissCard}>
                Hi there!
            </div>
            <div className="top-card" onClick={dismissCard}>
                ABABABABA
            </div>
        </div>
    );
}

export default TopCards;
