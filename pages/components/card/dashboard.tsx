
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <div className="dashboard__header__left">
                    <div className="dashboard__header__left__image">
                        <span className="dashboard__header__left__image__text">Referral Earnings</span>
                        <span className="dashboard__header__left__image__number">₹ 2,500</span>
                    </div>
                    <div className="dashboard__header__left__image">
                        <span className="dashboard__header__left__image__text">Total Referrals</span>
                        <span className="dashboard__header__left__image__number">7</span>
                    </div>
                    <div className="dashboard__header__left__image">
                        <span className="dashboard__header__left__image__text">Wallet Balance</span>
                        <span className="dashboard__header__left__image__number">₹ 500</span>
                    </div>
                </div>
                <div className="dashboard__header__right">
                    <button className="dashboard__header__right__button">
                        Withdraw Balance
                    </button>
                </div>
            </div>
            <div className="dashboard__body">
                <span className="dashboard__body__text">Your Referral Code</span>
                <div className="dashboard__body__code">
                    <span className="dashboard__body__code__text">EDCH54</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;