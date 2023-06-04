
export default function Work() {
    const work = [
        {
            icon: "/assets/invite-people.svg",
            title: "Invite your Friends",
            description: "Share the link tutedude.com with your friends"
        },
        {
            icon: "/assets/referral-coupon.svg",
            title: "Friend purchases any course",
            description: "Using your REFERRAL CODE in the payments page"
        },
        {
            icon: "/assets/rupee.svg",
            title: "You get ₹ 200 as referral money",
            description: "On total purchase the friend makes, into your wallet"
        },
        {
            icon: "/assets/discount-for-friend.svg",
            title: "Your Friend gets ₹ 200 Off ",
            description: "On his overall fee on successful purchase using your referral code"
        },
        {
            icon: "/assets/wallet.svg",
            title: "Transfer money from wallet",
            description: "When the wallet balance reaches ₹200 or more, you can withdraw it"
        }
    ]

    return (
        <div className="work">
            <h2 className="work__title">
                How does it work?
            </h2>
            <div className="work__items">
                {work.map((item, index) => (
                    <div className="work__item" key={index}>
                        <div className="work__item__icon">
                            <div className="work__item__icon-inner">
                                <img src={item.icon} alt={item.title} />
                            </div>
                        </div>
                        <div className="work__item__content">
                            <h3 className="work__item__title">{item.title}</h3>
                            <p className="work__item__description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}